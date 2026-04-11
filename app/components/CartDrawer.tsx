"use client";

import { useCart } from "../context/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, itemCount, total, isOpen, setIsOpen } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-[#0A0A0A] shadow-2xl z-[70] flex flex-col border-l border-white/10">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <h2 className="text-lg font-bold text-white uppercase tracking-wider">
            Your Cart{" "}
            <span className="text-gray-500 text-sm font-normal">({itemCount})</span>
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="Close cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white/10 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <p className="text-gray-500 text-sm">Your cart is empty</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 text-sm text-accent hover:text-white underline underline-offset-4 transition-colors"
              >
                Continue shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 bg-white/5 rounded-2xl p-3 border border-white/10"
                >
                  <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 relative bg-white/5">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-white truncate">{item.name}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{item.format}</p>
                    <p className="text-sm font-bold text-accent mt-1">${item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="w-6 h-6 rounded border border-white/10 text-gray-400 hover:text-white hover:border-accent transition-colors flex items-center justify-center text-sm disabled:opacity-30"
                      >
                        −
                      </button>
                      <span className="text-sm text-white w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 rounded border border-white/10 text-gray-400 hover:text-white hover:border-accent transition-colors flex items-center justify-center text-sm"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto text-xs text-gray-500 hover:text-red-400 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Subtotal</span>
              <span className="text-lg font-bold text-white">${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-gray-500">Shipping calculated at checkout</p>
            <Link
              href="/checkout"
              onClick={() => setIsOpen(false)}
              className="block w-full bg-accent hover:bg-accent/90 text-white text-sm text-center font-bold uppercase tracking-wider py-3 rounded-2xl transition-colors"
            >
              Proceed to Checkout
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="block w-full text-center text-sm text-gray-400 hover:text-white transition-colors underline underline-offset-4"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
