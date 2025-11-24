import React from "react";

export default function Navbar() {
  return (
    <header className="w-full bg-blue-500">
      {/* Container for content */}
      <div className="container max-w-6xl mx-auto flex items-center justify-between px-5 py-3 font-sans">
        <a href="/" className="text-white font-bold text-lg" aria-label="Homepage">
          NABIL
        </a>

        <nav className="flex items-center gap-4" aria-label="Main navigation">
          <a href="/" className="text-white text-sm px-3 py-2 rounded hover:bg-blue-600 transition">
            Home
          </a>
          <a href="/about" className="text-white text-sm px-3 py-2 rounded hover:bg-blue-600 transition">
            About
          </a>
          <a href="/cart" className="text-white font-semibold text-sm px-3 py-2 rounded bg-blue-800 hover:bg-blue-900 transition">
            View Cart
          </a>
          <a href="/login" className="text-white text-sm px-3 py-2 rounded bg-blue-700 hover:bg-blue-800 transition">
            Sign in
          </a>
        </nav>
      </div>
    </header>
  );
}
