"use client";

import { useCart } from "../context/CartContext";

export default function ReservationTimer({ className = "" }: { className?: string }) {
  const { secondsLeft, reservationError, isReserving, items } = useCart();

  if (items.length === 0) return null;

  const minutes = Math.floor(secondsLeft / 60);
  const secs = secondsLeft % 60;
  const isUrgent = secondsLeft > 0 && secondsLeft <= 120;

  if (reservationError) {
    return (
      <div className={`flex items-center gap-2 rounded-md bg-red-900/30 border border-red-500/40 px-3 py-2 ${className}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-400 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        <p className="text-xs text-red-300">{reservationError}</p>
      </div>
    );
  }

  if (isReserving) {
    return (
      <div className={`flex items-center gap-2 px-3 py-2 ${className}`}>
        <div className="w-3 h-3 border-2 border-white/40 border-t-transparent rounded-full animate-spin" />
        <p className="text-xs text-white/50">Reserving items...</p>
      </div>
    );
  }

  if (secondsLeft <= 0) return null;

  return (
    <div
      className={`flex items-center gap-2 rounded-md px-3 py-2 ${
        isUrgent
          ? "bg-red-900/30 border border-red-500/40"
          : "bg-white/5 border border-white/10"
      } ${className}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 flex-shrink-0 ${isUrgent ? "text-red-400" : "text-white/50"}`} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
      </svg>
      <p className={`text-xs font-medium ${isUrgent ? "text-red-300" : "text-white/60"}`}>
        Items reserved for{" "}
        <span className={`font-mono font-bold ${isUrgent ? "text-red-400" : "text-white"}`}>
          {minutes}:{secs.toString().padStart(2, "0")}
        </span>
      </p>
    </div>
  );
}
