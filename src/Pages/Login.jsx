import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../api";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await api.post("/users/login", {
        username,
        password,
      });

      const token =
        res?.data?.token ||
        res?.data?.accessToken ||
        res?.data?.data?.token;

      if (token) {
        localStorage.setItem("token", token);
      }

      navigate("/");
    } catch (err) {
      setError(err?.response?.data?.message || "Login failed");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-lg rounded-xl p-7"
      >
        <h1 className="text-xl font-semibold text-gray-900">Welcome back</h1>
        <p className="text-sm text-gray-500 mb-4">
          Sign in to your account — minimalist & accessible
        </p>

        {error && (
          <p className="text-red-600 text-sm bg-red-50 p-2 rounded mb-3">
            {error}
          </p>
        )}

        <label className="text-sm text-gray-700 mb-1 block">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="text-sm text-gray-700 mb-1 block mt-4">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex items-center justify-between mt-6">
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-[#3489eb] text-white rounded-lg text-sm font-semibold min-w-[130px] hover:bg-[#0077ff] disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>

          <Link
            to="/register"
            className="text-sm text-blue-600 hover:underline"
          >
            Register
          </Link>
        </div>

        <p className="text-xs text-gray-400 text-center mt-4">
          By continuing you agree to our minimal privacy policy.
        </p>
      </form>
    </div>
  );
}
