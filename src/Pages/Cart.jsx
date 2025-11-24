import React, { useEffect, useState } from "react";

// Helper functions
function readCart() {
  try {
    const raw = localStorage.getItem("cart");
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveCart(items) {
  try {
    localStorage.setItem("cart", JSON.stringify(items));
  } catch {}
}

export default function Cart() {
  const [items, setItems] = useState([]);

  // Load cart initially and listen for updates
  useEffect(() => {
    const updateCart = () => setItems(readCart());
    updateCart();

    window.addEventListener("cartUpdated", updateCart);

    return () => window.removeEventListener("cartUpdated", updateCart);
  }, []);

  const updateQty = (id, qty) => {
    if (qty < 1) return;
    const updated = items.map((it) => (it.id === id ? { ...it, qty } : it));
    setItems(updated);
    saveCart(updated);
  };

  const removeItem = (id) => {
    const updated = items.filter((it) => it.id !== id);
    setItems(updated);
    saveCart(updated);
  };

  const clearCart = () => {
    setItems([]);
    saveCart([]);
  };

  const subtotal = items.reduce((s, it) => s + it.price * (it.qty || 1), 0);
  const shipping = subtotal > 75 || subtotal === 0 ? 0 : 6.99;
  const total = +(subtotal + shipping).toFixed(2);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#eef4ff" }}>
      <main className="max-w-5xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold mb-6" style={{ color: "#003f99" }}>
          Your Cart
        </h1>

        {items.length === 0 ? (
          <div
            className="p-8 rounded-lg shadow text-center"
            style={{ backgroundColor: "#d8e7ff", color: "#003f99" }}
          >
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {/* Cart Items */}
            <section
              className="md:col-span-2 p-4 rounded-lg shadow"
              style={{ backgroundColor: "#ffffff" }}
            >
              <ul className="space-y-4">
                {items.map((it) => (
                  <li
                    key={it.id}
                    className="flex items-center gap-4 p-3 rounded-lg transition hover:shadow-lg"
                    style={{ backgroundColor: "#eef4ff" }}
                  >
                    <div className="w-24 h-24 bg-gray-100 rounded overflow-hidden shrink-0">
                      <img
                        src={it.thumbnail || it.image}
                        alt={it.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <h3
                        className="font-semibold text-sm"
                        style={{ color: "#003f99" }}
                      >
                        {it.title}
                      </h3>

                      <p
                        className="text-xs mt-1 line-clamp-2"
                        style={{ color: "#003f99aa" }}
                      >
                        {it.description}
                      </p>

                      <div className="mt-2 flex items-center gap-3">
                        <label
                          className="text-sm"
                          style={{ color: "#003f99cc" }}
                        >
                          Qty
                        </label>

                        <input
                          type="number"
                          min="1"
                          value={it.qty || 1}
                          onChange={(e) =>
                            updateQty(it.id, Number(e.target.value))
                          }
                          className="w-20 px-2 py-1 border rounded"
                          style={{ borderColor: "#005fcc" }}
                        />

                        <button
                          onClick={() => removeItem(it.id)}
                          className="text-sm hover:underline"
                          style={{ color: "#d60000" }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    <div className="text-right">
                      <div
                        className="font-medium"
                        style={{ color: "#003f99" }}
                      >
                        ${(it.price * (it.qty || 1)).toFixed(2)}
                      </div>
                      <div className="text-xs" style={{ color: "#003f99aa" }}>
                        ${it.price.toFixed(2)} each
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Cart Actions */}
              <div className="mt-4 flex justify-between">
                <button
                  onClick={clearCart}
                  className="px-3 py-2 rounded"
                  style={{
                    backgroundColor: "#ffdddd",
                    color: "#d60000",
                  }}
                >
                  Clear cart
                </button>

                <button
                  onClick={() => (window.location.href = "/")}
                  className="px-3 py-2 rounded text-white"
                  style={{ backgroundColor: "#005fcc" }}
                >
                  Continue shopping
                </button>
              </div>
            </section>

            {/* Summary Box */}
            <aside
              className="rounded-lg shadow p-4"
              style={{ backgroundColor: "#ffffff" }}
            >
              <div className="mb-4">
                <div className="flex justify-between">
                  <span className="text-sm" style={{ color: "#003f99cc" }}>
                    Subtotal
                  </span>
                  <span className="font-medium" style={{ color: "#003f99" }}>
                    ${subtotal.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between mt-2">
                  <span className="text-sm" style={{ color: "#003f99cc" }}>
                    Shipping
                  </span>
                  <span className="font-medium" style={{ color: "#003f99" }}>
                    {shipping === 0 ? "Free" : `$${shipping}`}
                  </span>
                </div>
              </div>

              <div className="border-t pt-4">
                <div
                  className="flex justify-between text-lg font-bold"
                  style={{ color: "#003f99" }}
                >
                  <span>Total</span>
                  <span>${total}</span>
                </div>

                <button
                  onClick={() => alert("Checkout flow not implemented")}
                  className="mt-4 w-full px-4 py-2 rounded text-white"
                  style={{ backgroundColor: "#3489eb" }}
                >
                  Proceed to checkout
                </button>
              </div>
            </aside>
          </div>
        )}
      </main>
    </div>
  );
}
