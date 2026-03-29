"use client";

import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Product = {
  size: string;
  label: string;
  price: string;
};

type CartItem = {
  size: string;
  label: string;
  price: string;
  qty: number;
  subtotal: number;
};

const STORAGE_KEY = "oscargas-cart-v1";

const products: Product[] = [
  { size: "5kg", label: "Starter", price: "R 180" },
  { size: "9kg", label: "Home - Most Popular", price: "R 300" },
  { size: "14kg", label: "Plus", price: "R 480" },
  { size: "19kg", label: "Family", price: "R 550" },
  { size: "48kg", label: "Business", price: "R 1 250" },
];

function priceNumber(price: string) {
  return Number(price.replace(/[^\d]/g, ""));
}

export default function CheckoutPage() {
  const router = useRouter();
  const [cart, setCart] = useState<Record<string, number>>({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  // Load cart from localStorage
  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      setCart({});
      return;
    }
    try {
      const parsed = JSON.parse(raw);
      setCart(parsed);
    } catch {
      setCart({});
    }
  }, []);

  // Calculate cart totals
  const cartItems = useMemo(() => {
    return products
      .filter((p) => cart[p.size] > 0)
      .map((p) => ({
        ...p,
        qty: cart[p.size],
        subtotal: cart[p.size] * priceNumber(p.price),
      }));
  }, [cart]);

  const cartTotal = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.subtotal, 0);
  }, [cartItems]);

  const deliveryFee = Math.min(150, Math.max(50, cartTotal * 0.05)); // 5% of total, min R50, max R150
  const grandTotal = cartTotal + deliveryFee;

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !phone.trim() || !address.trim() || !city.trim() || !zipCode.trim()) {
      setSubmitMessage("Please fill in all fields");
      setTimeout(() => setSubmitMessage(""), 4000);
      return;
    }

    if (cartItems.length === 0) {
      setSubmitMessage("Your cart is empty. Please add items to your cart");
      setTimeout(() => setSubmitMessage(""), 4000);
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // Format order details for WhatsApp
      const orderDetails = `
*OSCAR GAS ORDER*

*Customer Details:*
Name: ${name}
Email: ${email}
Phone: ${phone}

*Delivery Address:*
${address}
${city}, ${zipCode}

*Order Items:*
${cartItems.map((item: any) => `• ${item.size} (${item.label}) x${item.qty} = R ${item.subtotal.toLocaleString("en-ZA")}`).join("\n")}

*Order Summary:*
Subtotal: R ${cartTotal.toLocaleString("en-ZA")}
Delivery Fee: R ${deliveryFee.toFixed(2)}
*Total: R ${grandTotal.toFixed(2)}*

Order placed on: ${new Date().toLocaleString()}
      `.trim();

      // Send to backend for logging/email
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          address,
          city,
          zipCode,
          cartItems,
          subtotal: cartTotal,
          deliveryFee,
          grandTotal,
        }),
      });

      // Open WhatsApp regardless of API response
      const whatsappUrl = `https://wa.me/27813870497?text=${encodeURIComponent(orderDetails)}`;
      window.open(whatsappUrl, "_blank");

      // Show success message
      setSubmitMessage("✓ Order submitted! Opening WhatsApp...");
      
      // Clear cart and redirect
      setTimeout(() => {
        localStorage.removeItem(STORAGE_KEY);
        router.push("/shop");
      }, 2000);
    } catch (error) {
      console.error("Order error:", error);
      setSubmitMessage("Order submitted! Opening WhatsApp...");
      
      // Still open WhatsApp even if there's an error
      const orderDetails = `
*OSCAR GAS ORDER*

*Customer Details:*
Name: ${name}
Email: ${email}
Phone: ${phone}

*Delivery Address:*
${address}
${city}, ${zipCode}

*Order Items:*
${cartItems.map((item: any) => `• ${item.size} (${item.label}) x${item.qty} = R ${item.subtotal.toLocaleString("en-ZA")}`).join("\n")}

*Order Summary:*
Subtotal: R ${cartTotal.toLocaleString("en-ZA")}
Delivery Fee: R ${deliveryFee.toFixed(2)}
*Total: R ${grandTotal.toFixed(2)}*
      `.trim();
      
      const whatsappUrl = `https://wa.me/27813870497?text=${encodeURIComponent(orderDetails)}`;
      window.open(whatsappUrl, "_blank");
      
      setTimeout(() => {
        localStorage.removeItem(STORAGE_KEY);
        router.push("/shop");
      }, 2000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Redirect if cart is empty
  if (cartItems.length === 0) {
    return (
      <>
        <Navbar />
        <div className="pt-32 pb-24 px-6 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="display text-4xl font-bold mb-4">Your cart is empty</h1>
            <p className="text-[var(--steel)] mb-8">Add some cylinders to your cart before checking out</p>
            <a
              href="/shop"
              className="display inline-block bg-[var(--flame)] text-white px-8 py-3 font-semibold tracking-widest uppercase hover:bg-[var(--flame-dark)] transition-colors"
            >
              Continue Shopping
            </a>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="pt-32 pb-24 px-6 bg-[var(--charcoal)]">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <p className="display text-[var(--flame)] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
              Complete Your Order
            </p>
            <h1 className="display font-bold uppercase leading-none" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
              Checkout
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="border border-white/10 rounded-lg p-6 bg-[var(--ash)]">
                  <h2 className="display text-xl font-bold mb-6 text-[var(--flame)]">Personal Information</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-[var(--mist)]">Full Name *</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 bg-[var(--ash)]/80 border border-white/15 rounded text-white placeholder-[var(--steel)] focus:border-[var(--flame)] focus:bg-[var(--ash)] focus:outline-none transition-colors text-base"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-[var(--mist)]">Email *</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-3 bg-[var(--ash)]/80 border border-white/15 rounded text-white placeholder-[var(--steel)] focus:border-[var(--flame)] focus:bg-[var(--ash)] focus:outline-none transition-colors text-base"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-[var(--mist)]">Phone *</label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full px-4 py-3 bg-[var(--ash)]/80 border border-white/15 rounded text-white placeholder-[var(--steel)] focus:border-[var(--flame)] focus:bg-[var(--ash)] focus:outline-none transition-colors text-base"
                          placeholder="+27 81 234 5678"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Delivery Information */}
                <div className="border border-white/10 rounded-lg p-6 bg-[var(--ash)]">
                  <h2 className="display text-xl font-bold mb-6 text-[var(--flame)]">Delivery Address</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-[var(--mist)]">Street Address *</label>
                      <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full px-4 py-3 bg-[var(--ash)]/80 border border-white/15 rounded text-white placeholder-[var(--steel)] focus:border-[var(--flame)] focus:bg-[var(--ash)] focus:outline-none transition-colors text-base"
                        placeholder="123 Main Street, Apartment 4B"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-[var(--mist)]">City/Town *</label>
                        <input
                          type="text"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          className="w-full px-4 py-3 bg-[var(--ash)]/80 border border-white/15 rounded text-white placeholder-[var(--steel)] focus:border-[var(--flame)] focus:bg-[var(--ash)] focus:outline-none transition-colors text-base"
                          placeholder="Cape Town"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-[var(--mist)]">Postal Code *</label>
                        <input
                          type="text"
                          value={zipCode}
                          onChange={(e) => setZipCode(e.target.value)}
                          className="w-full px-4 py-3 bg-[var(--ash)]/80 border border-white/15 rounded text-white placeholder-[var(--steel)] focus:border-[var(--flame)] focus:bg-[var(--ash)] focus:outline-none transition-colors text-base"
                          placeholder="8000"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Message */}
                {submitMessage && (
                  <div
                    className={`p-4 rounded text-center font-semibold ${
                      submitMessage.includes("✓")
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {submitMessage}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full display py-3 bg-[var(--flame)] text-white font-semibold tracking-widest uppercase hover:bg-[var(--flame-dark)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 rounded"
                >
                  {isSubmitting ? "Processing..." : "Complete Order"}
                </button>

                <a
                  href="/shop"
                  className="block text-center text-[var(--steel)] hover:text-white transition-colors text-sm"
                >
                  ← Back to Shopping
                </a>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="border border-white/10 rounded-lg p-6 bg-[var(--ash)] sticky top-32">
                <h2 className="display text-xl font-bold mb-6 text-[var(--flame)]">Order Summary</h2>

                {/* Items List */}
                <div className="space-y-3 mb-6 pb-6 border-b border-white/10">
                  {cartItems.map((item) => (
                    <div key={item.size} className="flex items-center justify-between gap-2">
                      <div>
                        <p className="text-sm font-semibold">{item.size}</p>
                        <p className="text-xs text-[var(--steel)]">{item.label}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-[var(--mist)]">x{item.qty}</p>
                        <p className="text-sm text-[var(--flame)] font-semibold">R {item.subtotal.toLocaleString("en-ZA")}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-[var(--steel)]">Subtotal</span>
                    <span>R {cartTotal.toLocaleString("en-ZA")}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[var(--steel)]">Delivery Fee</span>
                    <span>R {deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold py-3 border-t border-white/10 mt-3">
                    <span>Total</span>
                    <span className="text-[var(--flame)]">R {grandTotal.toFixed(2)}</span>
                  </div>
                </div>

                {/* Info */}
                <p className="text-xs text-[var(--steel)] mt-6 pt-6 border-t border-white/10">
                  Your order will be confirmed via WhatsApp. Please ensure your phone number is correct.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
