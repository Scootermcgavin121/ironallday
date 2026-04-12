"use client";

import { createContext, useContext, useState, useEffect, useCallback, useRef, type ReactNode } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  format: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">, qty?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  total: number;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  expiresAt: number | null;
  secondsLeft: number;
  reservationError: string;
  isReserving: boolean;
  sessionId: string;
}

const CartContext = createContext<CartContextType | null>(null);

const STORAGE_KEY = "iad_cart";
const SESSION_KEY = "iad_session_id";
const EXPIRES_KEY = "iad_cart_expires";

function getOrCreateSessionId(): string {
  if (typeof window === "undefined") return "";
  let sid = localStorage.getItem(SESSION_KEY);
  if (!sid) {
    sid = crypto.randomUUID();
    localStorage.setItem(SESSION_KEY, sid);
  }
  return sid;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [expiresAt, setExpiresAt] = useState<number | null>(null);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [reservationError, setReservationError] = useState("");
  const [isReserving, setIsReserving] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const reserveTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setItems(JSON.parse(stored));
      const storedExpires = localStorage.getItem(EXPIRES_KEY);
      if (storedExpires) {
        const exp = Number(storedExpires);
        if (exp > Date.now()) {
          setExpiresAt(exp);
        } else {
          localStorage.removeItem(STORAGE_KEY);
          localStorage.removeItem(EXPIRES_KEY);
          setItems([]);
        }
      }
      setSessionId(getOrCreateSessionId());
    } catch {}
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, loaded]);

  useEffect(() => {
    if (loaded) {
      if (expiresAt) localStorage.setItem(EXPIRES_KEY, String(expiresAt));
      else localStorage.removeItem(EXPIRES_KEY);
    }
  }, [expiresAt, loaded]);

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (!expiresAt) { setSecondsLeft(0); return; }

    const tick = () => {
      const remaining = Math.max(0, Math.floor((expiresAt - Date.now()) / 1000));
      setSecondsLeft(remaining);
      if (remaining <= 0) {
        setItems([]);
        setExpiresAt(null);
        setReservationError("Your cart reservation has expired. Items have been released.");
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(EXPIRES_KEY);
        if (sessionId) {
          fetch("/api/cart/release", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ sessionId }),
          }).catch(() => {});
        }
        if (timerRef.current) clearInterval(timerRef.current);
      }
    };

    tick();
    timerRef.current = setInterval(tick, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [expiresAt, sessionId]);

  const reserveItems = useCallback(async (cartItems: CartItem[], sid: string) => {
    if (cartItems.length === 0) {
      setExpiresAt(null);
      setReservationError("");
      fetch("/api/cart/release", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId: sid }),
      }).catch(() => {});
      return;
    }

    setIsReserving(true);
    setReservationError("");

    try {
      const res = await fetch("/api/cart/reserve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId: sid,
          items: cartItems.map((i) => ({ id: i.id, quantity: i.quantity })),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setReservationError(data.error || "Failed to reserve items.");
        setExpiresAt(null);
      } else {
        setExpiresAt(new Date(data.expiresAt).getTime());
        setReservationError("");
      }
    } catch {
      setReservationError("Network error reserving items.");
    } finally {
      setIsReserving(false);
    }
  }, []);

  useEffect(() => {
    if (!loaded || !sessionId) return;
    if (reserveTimeout.current) clearTimeout(reserveTimeout.current);
    reserveTimeout.current = setTimeout(() => { reserveItems(items, sessionId); }, 500);
    return () => { if (reserveTimeout.current) clearTimeout(reserveTimeout.current); };
  }, [items, loaded, sessionId, reserveItems]);

  const addItem = useCallback((item: Omit<CartItem, "quantity">, qty = 1) => {
    setReservationError("");
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) return prev.map((i) => i.id === item.id ? { ...i, quantity: i.quantity + qty } : i);
      return [...prev, { ...item, quantity: qty }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((id: string) => {
    setReservationError("");
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity < 1) return;
    setReservationError("");
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, quantity } : i)));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
    setExpiresAt(null);
    setReservationError("");
  }, []);

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearCart, itemCount, total, isOpen, setIsOpen, expiresAt, secondsLeft, reservationError, isReserving, sessionId }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
