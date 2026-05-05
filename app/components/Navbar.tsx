"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ShoppingCart, Search } from "lucide-react";
import { useCart } from "../context/CartContext";
import SearchOverlay from "./SearchOverlay";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Reach Out", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { itemCount, setIsOpen } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/iad-logo.png"
              alt="Iron All Day"
              width={300}
              height={90}
              className="h-14 md:h-18 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold uppercase tracking-widest text-muted hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => setSearchOpen(true)}
              className="text-muted hover:text-accent transition-colors p-2"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(true)}
              className="text-muted hover:text-accent transition-colors relative p-2"
              aria-label="Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-black text-white">
                  {itemCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0A0A0A] border-t border-white/5">
          <div className="px-4 py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-sm font-semibold uppercase tracking-widest text-muted hover:text-accent transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => { setSearchOpen(true); setOpen(false); }}
              className="block text-sm font-semibold uppercase tracking-widest text-muted hover:text-accent transition-colors py-2"
            >
              <span className="flex items-center gap-2">
                <Search className="w-4 h-4" />
                Search
              </span>
            </button>
            <button
              onClick={() => { setIsOpen(true); setOpen(false); }}
              className="flex items-center justify-center gap-2 w-full bg-accent text-white text-sm font-bold uppercase tracking-wider px-5 py-2.5 rounded-2xl transition-colors"
            >
              <ShoppingCart className="w-4 h-4" />
              Cart {itemCount > 0 && `(${itemCount})`}
            </button>
          </div>
        </div>
      )}

      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </nav>
  );
}
