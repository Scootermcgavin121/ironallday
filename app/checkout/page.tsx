"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";
import Link from "next/link";

type CheckoutStep = "shipping" | "review" | "confirmation";

interface ShippingForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  apartment: string;
  city: string;
  state: string;
  zip: string;
}

export default function CheckoutPage() {
  const { items, total, itemCount, clearCart } = useCart();
  const [step, setStep] = useState<CheckoutStep>("shipping");
  const [researchAgreed, setResearchAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [orderId, setOrderId] = useState("");

  const [shipping, setShipping] = useState<ShippingForm>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zip: "",
  });

  const updateField = (field: keyof ShippingForm, value: string) => {
    setShipping((prev) => ({ ...prev, [field]: value }));
  };

  const shippingValid =
    shipping.firstName &&
    shipping.lastName &&
    shipping.email &&
    shipping.address &&
    shipping.city &&
    shipping.state &&
    shipping.zip;

  const handleSubmitOrder = async () => {
    if (!researchAgreed) {
      setError("You must agree to the research-use-only terms.");
      return;
    }
    setError("");
    setSubmitting(true);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((i) => ({
            id: i.id,
            quantity: i.quantity,
            price: i.price,
          })),
          shipping: { ...shipping, country: "US" },
          researchAgreed,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong.");
        setSubmitting(false);
        return;
      }

      setOrderId(data.orderId);
      clearCart();
      setStep("confirmation");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // Empty cart
  if (items.length === 0 && step !== "confirmation") {
    return (
      <main className="min-h-screen bg-[#0A0A0A] pt-28 pb-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-black text-white uppercase tracking-tight mb-4">Your Cart is Empty</h1>
          <p className="text-gray-400 mb-6">Add some research compounds to get started.</p>
          <Link
            href="/shop"
            className="inline-block bg-accent hover:bg-accent/90 text-white text-sm font-bold uppercase tracking-wider px-8 py-3 rounded-2xl transition-colors"
          >
            Browse Shop
          </Link>
        </div>
      </main>
    );
  }

  // Confirmation
  if (step === "confirmation") {
    return (
      <main className="min-h-screen bg-[#0A0A0A] pt-28 pb-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-black text-white uppercase tracking-tight mb-2">Order Placed!</h1>
          <p className="text-gray-400 mb-2">Thank you for your order.</p>
          <p className="text-sm text-gray-500 mb-6">
            Order ID: <span className="font-mono text-white">{orderId.slice(0, 8).toUpperCase()}</span>
          </p>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 mb-6 text-left">
            <h3 className="font-bold text-white mb-2">What happens next?</h3>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Your order is being reviewed and prepared</li>
              <li>• You&apos;ll receive a confirmation email at <strong className="text-white">{shipping.email}</strong></li>
              <li>• Tracking information will be sent once shipped</li>
            </ul>
          </div>
          <p className="text-xs text-gray-600 italic mb-6">All products are for laboratory and research use only.</p>
          <Link
            href="/shop"
            className="inline-block bg-accent hover:bg-accent/90 text-white text-sm font-bold uppercase tracking-wider px-8 py-3 rounded-2xl transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  const inputClass = "w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-accent disabled:opacity-50";

  return (
    <main className="min-h-screen bg-[#0A0A0A] pt-28 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-black text-white uppercase tracking-tight mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: Form */}
          <div className="lg:col-span-3 space-y-6">
            {/* Shipping */}
            <div className={`bg-white/5 rounded-2xl p-6 border border-white/10 ${step === "review" ? "opacity-60" : ""}`}>
              <h2 className="text-lg font-bold text-white uppercase tracking-wider mb-4">Shipping Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-wide mb-1">First Name *</label>
                  <input type="text" value={shipping.firstName} onChange={(e) => updateField("firstName", e.target.value)} disabled={step === "review"} className={inputClass} />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-wide mb-1">Last Name *</label>
                  <input type="text" value={shipping.lastName} onChange={(e) => updateField("lastName", e.target.value)} disabled={step === "review"} className={inputClass} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-wide mb-1">Email *</label>
                  <input type="email" value={shipping.email} onChange={(e) => updateField("email", e.target.value)} disabled={step === "review"} className={inputClass} />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-wide mb-1">Phone</label>
                  <input type="tel" value={shipping.phone} onChange={(e) => updateField("phone", e.target.value)} disabled={step === "review"} className={inputClass} />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-xs text-gray-500 uppercase tracking-wide mb-1">Address *</label>
                <input type="text" value={shipping.address} onChange={(e) => updateField("address", e.target.value)} disabled={step === "review"} className={inputClass} />
              </div>
              <div className="mt-4">
                <label className="block text-xs text-gray-500 uppercase tracking-wide mb-1">Apt / Suite</label>
                <input type="text" value={shipping.apartment} onChange={(e) => updateField("apartment", e.target.value)} disabled={step === "review"} className={inputClass} />
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-wide mb-1">City *</label>
                  <input type="text" value={shipping.city} onChange={(e) => updateField("city", e.target.value)} disabled={step === "review"} className={inputClass} />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-wide mb-1">State *</label>
                  <input type="text" value={shipping.state} onChange={(e) => updateField("state", e.target.value)} disabled={step === "review"} maxLength={2} placeholder="NY" className={inputClass} />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-wide mb-1">ZIP *</label>
                  <input type="text" value={shipping.zip} onChange={(e) => updateField("zip", e.target.value)} disabled={step === "review"} className={inputClass} />
                </div>
              </div>

              {step === "shipping" && (
                <button
                  onClick={() => shippingValid && setStep("review")}
                  disabled={!shippingValid}
                  className="mt-6 bg-accent hover:bg-accent/90 text-white text-sm font-bold uppercase tracking-wider px-6 py-3 rounded-2xl transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Continue to Review
                </button>
              )}
              {step === "review" && (
                <button
                  onClick={() => setStep("shipping")}
                  className="mt-4 text-sm text-accent hover:text-white underline underline-offset-4 transition-colors"
                >
                  Edit shipping info
                </button>
              )}
            </div>

            {/* Review */}
            {step === "review" && (
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h2 className="text-lg font-bold text-white uppercase tracking-wider mb-4">Review & Place Order</h2>

                <label className="flex items-start gap-3 cursor-pointer mb-6 bg-white/5 rounded-xl p-4 border border-white/10">
                  <input
                    type="checkbox"
                    checked={researchAgreed}
                    onChange={(e) => setResearchAgreed(e.target.checked)}
                    className="mt-0.5 w-4 h-4 accent-accent"
                  />
                  <span className="text-sm text-gray-300 leading-relaxed">
                    I confirm that all products in this order are purchased <strong className="text-white">strictly for laboratory and educational research purposes only</strong>. I understand these products are not intended for human consumption, and I agree to the{" "}
                    <Link href="/terms" className="text-accent hover:text-white underline" target="_blank">Terms of Service</Link>{" "}
                    and{" "}
                    <Link href="/disclaimer" className="text-accent hover:text-white underline" target="_blank">Research Disclaimer</Link>.
                  </span>
                </label>

                <div className="bg-accent/10 border border-accent/30 rounded-xl p-4 mb-6">
                  <p className="text-sm text-gray-300">
                    <strong className="text-white">Payment:</strong> After placing your order, you&apos;ll receive payment instructions via email.
                    We currently accept cryptocurrency payments. Credit card processing coming soon.
                  </p>
                </div>

                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 mb-4">
                    <p className="text-sm text-red-400">{error}</p>
                  </div>
                )}

                <button
                  onClick={handleSubmitOrder}
                  disabled={submitting || !researchAgreed}
                  className="w-full bg-accent hover:bg-accent/90 text-white text-sm font-bold uppercase tracking-wider py-3 rounded-2xl transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {submitting ? "Placing Order…" : "Place Order"}
                </button>

                <p className="text-xs text-gray-600 text-center mt-3 italic">
                  For research purposes only. Not for human consumption.
                </p>
              </div>
            )}
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 sticky top-32">
              <h2 className="text-lg font-bold text-white uppercase tracking-wider mb-4">
                Order Summary ({itemCount})
              </h2>

              <div className="space-y-3 mb-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-white/5">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-white truncate">{item.name}</p>
                      <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-bold text-white">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-3 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Subtotal</span>
                  <span className="text-white">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Shipping</span>
                  <span className="text-gray-500 italic">Calculated after order</span>
                </div>
                <div className="flex justify-between text-base font-bold border-t border-white/10 pt-2 mt-2">
                  <span className="text-white">Total</span>
                  <span className="text-accent">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
