"use client";

import { useState } from "react";
import { useCart, type CartItem } from "../context/CartContext";

interface Props {
  product: Omit<CartItem, "quantity">;
  className?: string;
  variant?: "default" | "compact";
}

export default function AddToCartButton({ product, className, variant = "default" }: Props) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  if (variant === "compact") {
    return (
      <button
        onClick={handleAdd}
        className={`bg-accent hover:bg-accent/90 text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-2xl transition-all duration-200 ${
          added ? "bg-green-500 scale-95" : ""
        } ${className || ""}`}
      >
        {added ? "✓ Added" : "Add to Cart"}
      </button>
    );
  }

  return (
    <button
      onClick={handleAdd}
      className={`bg-accent hover:bg-accent/90 text-white text-sm font-bold uppercase tracking-wider px-8 py-3 rounded-2xl transition-all duration-200 w-fit ${
        added ? "bg-green-500 scale-95" : ""
      } ${className || ""}`}
    >
      {added ? "✓ Added to Cart" : "Add to Cart"}
    </button>
  );
}
