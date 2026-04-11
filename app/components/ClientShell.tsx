"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";
import CartDrawer from "./CartDrawer";
import { CartProvider } from "../context/CartContext";

export default function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <Navbar />
      <CartDrawer />
      <div className="flex-1">{children}</div>
      <Footer />
    </CartProvider>
  );
}
