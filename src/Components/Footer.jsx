import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-blue-500 text-white mt-12">
      {/* Top Section */}
      <div className="container max-w-6xl mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <a href="/" className="font-bold text-lg mb-2 inline-block">
            NABIL
          </a>
          <p className="text-sm text-blue-100">
            Quality products at the best prices. Shop with confidence!
          </p>
        </div>

        {/* Product Categories */}
        <div>
          <h3 className="font-semibold mb-2">Categories</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Electronics</a></li>
            <li><a href="#" className="hover:underline">Clothing</a></li>
            <li><a href="#" className="hover:underline">Home & Garden</a></li>
            <li><a href="#" className="hover:underline">Books</a></li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-semibold mb-2">Explore</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/cart" className="hover:underline">Cart</a></li>
            <li><a href="/login" className="hover:underline">Sign in</a></li>
          </ul>
        </div>

        {/* Filters / Info */}
        <div>
          <h3 className="font-semibold mb-2">Shop by</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Price</a></li>
            <li><a href="#" className="hover:underline">Popularity</a></li>
            <li><a href="#" className="hover:underline">Rating</a></li>
            <li><a href="#" className="hover:underline">Offers</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full border-t border-blue-400">
        <div className="container max-w-6xl mx-auto px-5 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} NABIL. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
