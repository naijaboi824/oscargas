"use client";

import Link from "next/link";

type ProductModalProps = {
  isOpen: boolean;
  product: {
    size: string;
    price: string;
    waLink: string;
  } | null;
  onClose: () => void;
};

export default function ProductModal({ isOpen, product, onClose }: ProductModalProps) {
  if (!isOpen || !product) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm mx-4 bg-[var(--charcoal)] border border-white/10 rounded-lg shadow-2xl z-50 p-8 animate-in fade-in zoom-in duration-300">
        <div className="text-center mb-8">
          <h3 className="display text-2xl font-bold mb-2">{product.size} Cylinder</h3>
          <p className="text-[var(--flame)] display font-semibold text-lg">{product.price}</p>
        </div>

        <p className="text-[var(--steel)] text-sm text-center mb-8">
          How would you like to order?
        </p>

        {/* Action buttons */}
        <div className="space-y-3">
          <Link
            href={`/shop?add=${encodeURIComponent(product.size)}`}
            onClick={onClose}
            className="display block w-full text-center text-sm font-semibold tracking-widest uppercase py-3 bg-[var(--flame)] text-white hover:bg-[var(--flame-dark)] transition-all duration-200 rounded"
          >
            Order & Pay Online
          </Link>

          <a
            href={product.waLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="display block w-full text-center text-sm font-semibold tracking-widest uppercase py-3 border border-[var(--flame)]/50 text-[var(--flame)] hover:bg-[var(--flame)]/10 transition-all duration-200 rounded"
          >
            Order on WhatsApp
          </a>

          <button
            onClick={onClose}
            className="w-full text-center text-xs font-semibold tracking-widest uppercase py-2 text-[var(--steel)] hover:text-white transition-colors duration-200"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
