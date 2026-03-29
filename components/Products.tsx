"use client";
import { useState } from "react";
import Image from "next/image";
import ProductModal from "./ProductModal";

type Product = {
  id: number;
  size: string;
  label: string;
  price: string;
  desc: string;
  best: boolean;
  uses: string[];
  waLink: string;
};

const products: Product[] = [
  {
    id: 1,
    size: "5kg",
    label: "Starter",
    price: "R 180",
    desc: "Ideal for braais, camping, small single-burner stoves and occasional use.",
    best: false,
    uses: ["Braai & outdoor cooking", "Camping trips", "Backup supply"],
    waLink: "https://wa.me/p/9024456667664868/27813870497",
  },
  {
    id: 2,
    size: "9kg",
    label: "Home",
    price: "R 300",
    desc: "The most popular size for everyday household cooking on a standard gas stove.",
    best: true,
    uses: ["Daily household cooking", "Gas stoves", "Small water heaters"],
    waLink: "https://wa.me/p/9327560803932016/27813870497",
  },
  {
    id: 3,
    size: "14kg",
    label: "Plus",
    price: "R 480",
    desc: "More capacity than 9kg—ideal for busier kitchens, dual appliances, or longer runs between refills.",
    best: false,
    uses: ["Busy households", "Stove plus geyser or heater", "Fewer refill trips"],
    waLink: "https://wa.me/p/9588519914515951/27813870497",
  },
  {
    id: 4,
    size: "19kg",
    label: "Family",
    price: "R 550",
    desc: "Perfect for larger families, regular cooking and combination gas appliances.",
    best: false,
    uses: ["Large family households", "Combo stove & oven", "Water heaters"],
    waLink: "https://wa.me/p/9229125453793502/27813870497",
  },
  {
    id: 5,
    size: "48kg",
    label: "Business",
    price: "R 1 250",
    desc: "High-capacity cylinder for businesses, restaurants and heavy residential use.",
    best: false,
    uses: ["Restaurants & cafés", "Industrial equipment", "High-volume households"],
    waLink: "https://wa.me/p/8338833472883545/27813870497",
  },
];

export default function Products() {
  const [active, setActive] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="products" className="bg-[var(--charcoal)] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="display text-[var(--flame)] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
              Gas Cylinders
            </p>
            <h2
              className="display font-bold uppercase leading-none"
              style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}
            >
              Our <span className="text-[var(--flame)]">Products</span>
            </h2>
          </div>
          <p className="text-[var(--steel)] text-sm leading-relaxed max-w-xs">
            All cylinders are certified, regularly tested and delivered sealed. New cylinder or exchange — we stock both.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {products.map((p) => (
            <div
              key={p.id}
              onClick={() => {
                setActive(active === p.id ? null : p.id);
                setSelectedProduct(p);
              }}
              className={`card-sweep relative border cursor-pointer transition-all duration-300 overflow-hidden ${
                p.best
                  ? "border-[var(--flame)]/60 bg-[var(--ash)]"
                  : "border-white/8 bg-[var(--ash)] hover:border-white/20"
              }`}
            >
              {/* Best seller badge */}
              {p.best && (
                <div className="absolute top-0 right-0 bg-[var(--flame)] display text-white text-[10px] font-semibold tracking-widest uppercase px-3 py-1">
                  Most Popular
                </div>
              )}

              <div className="p-6">
                <div className="flex items-end justify-center h-40 mb-5 rounded-2xl border border-white/10 bg-[var(--black)]/80 shadow-[0_10px_24px_rgba(0,0,0,0.28)]">
                  <Image
                    src={`/cylinders/public:bottles:${p.size}.svg`}
                    alt={`${p.size} LP gas cylinder`}
                    width={200}
                    height={160}
                    className="h-40 w-auto max-w-[100%] object-contain object-bottom drop-shadow-[0_12px_24px_rgba(0,0,0,0.55)]"
                  />
                </div>

                {/* Info */}
                <div className="display text-[var(--steel)] text-xs tracking-widest uppercase mb-1">
                  {p.label}
                </div>
                <div
                  className="display font-bold leading-none mb-1"
                  style={{ fontSize: "clamp(2rem, 5vw, 2.8rem)" }}
                >
                  {p.size}
                </div>
                <div className="text-[var(--flame)] display font-semibold text-xl tracking-wide mb-3">
                  {p.price}
                </div>
                <p className="text-[var(--steel)] text-xs leading-relaxed mb-4">{p.desc}</p>

                {/* Use cases - expand on click */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    active === p.id ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="border-t border-white/8 pt-4 space-y-1.5">
                    {p.uses.map((u) => (
                      <li key={u} className="flex items-center gap-2 text-xs text-[var(--mist)]">
                        <span className="w-1 h-1 rounded-full bg-[var(--flame)] shrink-0" />
                        {u}
                      </li>
                    ))}
                  </ul>

                  {/* Action buttons in expanded section */}
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <a
                      href={`/shop?add=${encodeURIComponent(p.size)}`}
                      onClick={(e) => e.stopPropagation()}
                      className="display block w-full text-center text-xs font-semibold tracking-widest uppercase py-2 bg-[var(--flame)] text-white hover:bg-[var(--flame-dark)] transition-all duration-200"
                    >
                      Order
                    </a>
                    <a
                      href={p.waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="display block w-full text-center text-xs font-semibold tracking-widest uppercase py-2 border border-[var(--flame)]/50 text-[var(--flame)] hover:bg-[var(--flame)]/10 transition-all duration-200"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-[var(--steel)] text-xs mt-8 tracking-wide">
          Prices are indicative. Final pricing at checkout. Exchange cylinders available at discounted rates.
        </p>
      </div>

      {/* Modal */}
      <ProductModal
        isOpen={selectedProduct !== null}
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
