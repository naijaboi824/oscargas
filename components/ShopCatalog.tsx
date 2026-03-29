"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import ProductModal from "./ProductModal";

type Product = {
  size: string;
  label: string;
  price: string;
  desc: string;
  uses: string[];
  featured?: boolean;
  waLink: string;
};

type CartMap = Record<string, number>;

const STORAGE_KEY = "oscargas-cart-v1";

const products: Product[] = [
  {
    size: "5kg",
    label: "Starter",
    price: "R 180",
    desc: "Perfect for braais, camping and occasional single-burner use.",
    uses: ["Braai & outdoor cooking", "Camping trips", "Backup cylinder"],
    waLink: "https://wa.me/p/9024456667664868/27813870497",
  },
  {
    size: "9kg",
    label: "Home - Most Popular",
    price: "R 300",
    desc: "The go-to size for everyday household cooking on a standard gas stove.",
    uses: ["Daily household cooking", "Gas stoves", "Small water heaters"],
    featured: true,
    waLink: "https://wa.me/p/9327560803932016/27813870497",
  },
  {
    size: "14kg",
    label: "Plus",
    price: "R 480",
    desc: "More capacity than 9kg-great for busier kitchens, dual appliances, or fewer refill trips.",
    uses: ["Busy households", "Stove plus geyser or heater", "Longer between refills"],
    waLink: "https://wa.me/p/9588519914515951/27813870497",
  },
  {
    size: "19kg",
    label: "Family",
    price: "R 550",
    desc: "Larger households and homes with combo gas appliances and regular use.",
    uses: ["Large families", "Combo stove & oven", "Gas water heaters"],
    waLink: "https://wa.me/p/9229125453793502/27813870497",
  },
  {
    size: "48kg",
    label: "Business",
    price: "R 1 250",
    desc: "High-capacity for restaurants, businesses and heavy-use households.",
    uses: ["Restaurants & cafes", "Industrial equipment", "Heavy residential"],
    waLink: "https://wa.me/p/8338833472883545/27813870497",
  },
];

function priceNumber(price: string) {
  return Number(price.replace(/[^\d]/g, ""));
}

export default function ShopCatalog() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [cart, setCart] = useState<CartMap>({});
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw) as CartMap;
      setCart(parsed);
    } catch {
      setCart({});
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (!searchParams) return;
    if (!pathname) return;
    const add = searchParams.get("add");
    if (!add) return;
    if (!products.some((p) => p.size === add)) return;
    setCart((prev) => ({ ...prev, [add]: (prev[add] ?? 0) + 1 }));
    router.replace(pathname, { scroll: false });
  }, [searchParams, router, pathname]);

  const cartRows = useMemo(
    () =>
      products
        .filter((p) => cart[p.size] > 0)
        .map((p) => ({
          ...p,
          qty: cart[p.size],
          subtotal: cart[p.size] * priceNumber(p.price),
        })),
    [cart]
  );

  const cartCount = cartRows.reduce((acc, row) => acc + row.qty, 0);
  const cartTotal = cartRows.reduce((acc, row) => acc + row.subtotal, 0);

  const addOne = (size: string) => setCart((prev) => ({ ...prev, [size]: (prev[size] ?? 0) + 1 }));
  const removeOne = (size: string) =>
    setCart((prev) => {
      const next = { ...prev };
      const current = next[size] ?? 0;
      if (current <= 1) delete next[size];
      else next[size] = current - 1;
      return next;
    });

  const clearCart = () => setCart({});

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <p className="display text-[var(--flame)] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            Gas Cylinders
          </p>
          <h1 className="display font-bold uppercase leading-none" style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}>
            Shop All <span className="text-[var(--flame)]">Products</span>
          </h1>
          <p className="text-[var(--steel)] text-sm mt-4 max-w-md leading-relaxed">
            All cylinders are certified, tested, and delivered sealed. New cylinders or exchange - we stock both.
            Order via WhatsApp for fastest service.
          </p>
        </div>

        <section id="cart" className="mb-10 rounded-2xl border border-white/10 bg-[var(--charcoal)] p-5">
          <div className="flex items-center justify-between gap-4">
            <h2 className="display text-lg tracking-wider uppercase">Cart ({cartCount})</h2>
            {cartCount > 0 && (
              <button onClick={clearCart} className="text-xs text-[var(--mist)] hover:text-white transition-colors">
                Clear Cart
              </button>
            )}
          </div>
          {cartRows.length === 0 ? (
            <p className="text-[var(--steel)] text-sm mt-3">Your cart is empty. Add a cylinder to continue.</p>
          ) : (
            <div className="mt-4 space-y-3">
              {cartRows.map((row) => (
                <div key={row.size} className="flex items-center justify-between gap-3 border border-white/8 rounded-xl px-3 py-2">
                  <div>
                    <p className="display text-sm tracking-wider uppercase">{row.size}</p>
                    <p className="text-xs text-[var(--mist)]">{row.price} each</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => removeOne(row.size)} className="w-7 h-7 rounded border border-white/20 hover:border-white/40">
                      -
                    </button>
                    <span className="w-6 text-center">{row.qty}</span>
                    <button onClick={() => addOne(row.size)} className="w-7 h-7 rounded border border-white/20 hover:border-white/40">
                      +
                    </button>
                  </div>
                  <p className="text-sm text-[var(--flame)] font-semibold">R {row.subtotal.toLocaleString("en-ZA")}</p>
                </div>
              ))}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                <p className="display text-sm uppercase tracking-wider">Total</p>
                <p className="display text-xl text-[var(--flame)]">R {cartTotal.toLocaleString("en-ZA")}</p>
              </div>
            </div>
          )}
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((p) => (
            <div key={p.size} className={`border bg-[var(--charcoal)] flex flex-col ${p.featured ? "border-[var(--flame)]/50" : "border-white/8"}`}>
              {p.featured && (
                <div className="bg-[var(--flame)] display text-white text-[10px] font-semibold tracking-widest uppercase px-3 py-1 text-center">
                  Most Popular
                </div>
              )}

              <div className="flex items-end justify-center h-56 rounded-2xl border border-white/10 bg-[var(--black)]/80 py-2 shadow-[0_12px_26px_rgba(0,0,0,0.3)]">
                <Image
                  src={`/cylinders/public:bottles:${p.size}.svg`}
                  alt={`${p.size} LP gas cylinder`}
                  width={200}
                  height={220}
                  className="h-52 w-auto max-w-[100%] object-contain object-bottom drop-shadow-[0_14px_28px_rgba(0,0,0,0.58)]"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="display text-[var(--steel)] text-[10px] tracking-widest uppercase mb-1">{p.label}</div>
                <div className="display font-bold leading-none mb-2" style={{ fontSize: "clamp(2.2rem,5vw,3rem)" }}>
                  {p.size}
                </div>
                <div className="text-[var(--flame)] display font-semibold text-xl tracking-wide mb-3">{p.price}</div>
                <p className="text-[var(--steel)] text-xs leading-relaxed mb-5 flex-1">{p.desc}</p>

                <ul className="space-y-1.5 mb-6 border-t border-white/5 pt-4">
                  {p.uses.map((u) => (
                    <li key={u} className="flex items-center gap-2 text-xs text-[var(--mist)]">
                      <span className="w-1 h-1 rounded-full bg-[var(--flame)] shrink-0" />
                      {u}
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSelectedProduct(p)}
                    className="display block w-full text-center text-sm font-semibold tracking-widest uppercase py-3 bg-[var(--flame)] text-white hover:bg-[var(--flame-dark)] transition-all duration-200"
                  >
                    Order
                  </button>
                  <a
                    href={p.waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="display block w-full text-center text-xs font-semibold tracking-widest uppercase py-3 border border-[var(--flame)]/50 text-[var(--flame)] hover:bg-[var(--flame)]/10 transition-all duration-200"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[var(--steel)] text-xs mt-8">
          Prices are indicative. Exchange cylinders available at discounted rates. Delivery fee may apply depending on area.
        </p>
      </div>

      {/* Modal */}
      <ProductModal
        isOpen={selectedProduct !== null}
        product={selectedProduct}
        onClose={() => {
          setSelectedProduct(null);
        }}
      />
    </div>
  );
}

