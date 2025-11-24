import React, { useEffect, useState } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";


export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    axios
      .get("https://dummyjson.com/products?limit=12", {
        signal: controller.signal,
      })
      .then((res) => {
        setProducts(res.data?.products || []);
      })
      .catch((err) => {
        if (err?.code === "ERR_CANCELED") return;
        setError(err?.message || "Error");
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);







const addToCart = (p) => {
  try {
    const raw = localStorage.getItem("cart");
    let cart = raw ? JSON.parse(raw) : [];

    const existing = cart.find((item) => item.id === p.id);

    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({
        id: p.id,
        title: p.title,
        price: p.price,
        thumbnail: p.thumbnail || p.images?.[0],
        description: p.description,
        qty: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    // dispatch event so cart updates immediately
    window.dispatchEvent(new Event("cartUpdated"));

    toast.success(`Added to cart: ${p.title}`);
  } catch (err) {
    console.error("Cart error:", err);
  }
};









  
  return (
    <div className="min-h-screen rounded-2xl" style={{ backgroundColor: "#eef4ff" }}>
      <main className="max-w-6xl mx-auto px-6 py-10">
        
        {/* HERO SECTION */}
        <section className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1
              className="text-3xl sm:text-4xl font-extrabold mb-3"
              style={{ color: "#003f99" }}
            >
              Designed for life — products made to last
            </h1>

            <p className="mb-6" style={{ color: "#003f99cc" }}>
              Shop curated essentials with clean design and honest pricing.
              Free shipping on orders over $75.
            </p>

            <div className="flex items-center gap-3">
              <a href="#products" className="inline-flex items-center px-5 py-2.5 rounded-xl font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95" style={{ backgroundColor: "#005fcc" }}>Shop now</a>
              <button className="px-5 py-2.5 rounded-xl font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#005fcc] hover:shadow-xl active:scale-95" style={{backgroundColor: "#3489eb"}} onClick={() => alert("Newsletter signup coming soon")}>Join newsletter</button>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://img.freepik.com/premium-psd/fashion-special-discount-offer-3d-banner-template_351527-1200.jpg"
              alt="Featured product"
              className="w-full h-64 object-cover"
            />
          </div>
        </section>

        {/* FEATURE CARDS */}
        <section className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              title: "Premium quality",
              text: "Sustainably sourced materials",
            },
            {
              title: "Free shipping",
              text: "On orders over $75",
            },
            {
              title: "30-day returns",
              text: "Easy & free returns",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="p-4 rounded-lg shadow transform hover:-translate-y-1 transition"
              style={{ backgroundColor: "#d8e7ff" }}
              role="region"
            >
              <h4 className="font-semibold" style={{ color: "#003f99" }}>
                {f.title}
              </h4>
              <p className="text-sm" style={{ color: "#003f99cc" }}>
                {f.text}
              </p>
            </div>
          ))}
        </section>

        {/* PRODUCT GRID */}
        <section id="products" className="mt-10">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold" style={{ color: "#003f99" }}>
              Featured products
            </h2>
            <span className="text-sm" style={{ color: "#003f99cc" }}>
              {loading ? "Loading..." : `${products.length} products`}
            </span>
          </div>

          {error && <div className="mt-4 text-red-600">{error}</div>}

          <div className="mt-4 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {loading
              ? Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="animate-pulse rounded-lg p-4 h-64"
                    style={{ backgroundColor: "#d8e7ff" }}
                  />
                ))
              : products.map((p) => (
                  <article
                    key={p.id}
                    className="rounded-lg shadow overflow-hidden flex flex-col group transform transition hover:scale-105 hover:shadow-2xl"
                    style={{ backgroundColor: "#ffffff" }}
                  >
                    <div className="h-44 overflow-hidden bg-gray-100">
                      <img
                        src={p.thumbnail || p.images?.[0]}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <h3
                          className="text-sm font-semibold"
                          style={{ color: "#003f99" }}
                        >
                          {p.title}
                        </h3>
                        <p
                          className="text-xs mt-1 line-clamp-2"
                          style={{ color: "#000" }}
                        >
                          {p.description}
                        </p>
                      </div>

                      <div className="mt-4 flex items-center justify-between">
                        <div
                          className="text-lg font-bold"
                          style={{ color: "#003f99" }}
                        >
                          ${p.price}
                        </div>

                        <div className="flex items-center gap-2">
                          <button onClick={() => addToCart(p)} className="px-4 py-2 rounded-lg text-white font-semibold shadow-md transition-all duration-200 hover:shadow-xl hover:-translate-y-1 active:scale-95" style={{ backgroundColor: "#005fcc" }}>Add</button>
                          <a href="#" className="text-sm font-medium transition hover:underline" style={{ color: "#3489eb" }}>View</a>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
          </div>
        </section>
      </main>
    </div>
  );
}
