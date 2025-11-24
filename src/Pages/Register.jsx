import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../api";

export default function Register() {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (input.password !== input.confirm) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const res = await api.post("/users/register", {
        username: input.username,
        email: input.email,
        password: input.password,
      });

      setSuccess("Registration successful! Redirecting...");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setError(err?.response?.data?.message || "Registration failed");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-lg rounded-xl p-7"
      >
        <h1 className="text-xl font-semibold text-gray-900">Create account</h1>
        <p className="text-sm text-gray-500 mb-4">
          Minimal, accessible registration form
        </p>

        {error && (
          <p className="text-red-600 text-sm bg-red-50 p-2 rounded mb-3">
            {error}
          </p>
        )}

        {success && (
          <p className="text-green-600 text-sm bg-green-50 p-2 rounded mb-3">
            {success}
          </p>
        )}

        <label className="text-sm text-gray-700 mb-1 block">Username</label>
        <input
          name="username"
          type="text"
          value={input.username}
          onChange={handleChange}
          placeholder="Your username"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="text-sm text-gray-700 mb-1 block mt-4">Email</label>
        <input
          name="email"
          type="email"
          value={input.email}
          onChange={handleChange}
          placeholder="you@company.com"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="text-sm text-gray-700 mb-1 block mt-4">
          Password
        </label>
        <input
          name="password"
          type="password"
          value={input.password}
          onChange={handleChange}
          placeholder="Password"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="text-sm text-gray-700 mb-1 block mt-4">
          Confirm password
        </label>
        <input
          name="confirm"
          type="password"
          value={input.confirm}
          onChange={handleChange}
          placeholder="Repeat password"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex items-center justify-between mt-6">
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-[#3489eb] text-white rounded-lg text-sm font-semibold min-w-[150px] hover:bg-[#0077ff] disabled:opacity-50"
          >
            {loading ? "Creating..." : "Create account"}
          </button>

          <Link to="/login" className="text-sm text-blue-600 hover:underline">
            Sign in
          </Link>
        </div>

        <p className="text-xs text-gray-400 text-center mt-4">
          We store only what's necessary — tiny & private.
        </p>
      </form>
    </div>
  );
}
