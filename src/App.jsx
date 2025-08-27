import React, { useState } from "react";

export default function AuthApp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Email ve şifre gerekli!");
      return;
    }

    // Mock JWT oluştur
    const token = "fake-jwt-" + Date.now();

    // JWT'yi localStorage yerine host-app'e query param ile gönder
    const hostAppURL = `https://shell-app-psi.vercel.app/?token=${token}`;
    window.location.href = hostAppURL;

    console.log("Mock login successful:", token);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-black to-gray-800 ">
      <div className="w-full max-w-[250px] bg-black/80 text-white rounded-lg shadow-lg p-10">
        <h1 className="text-3xl font-bold text-center mb-6">Sign In</h1>

        {error && (
          <p className="p-3 bg-red-500 text-white rounded mb-4">{error}</p>
        )}

        <form onSubmit={login} className="w-full flex flex-col ">
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 my-2 bg-gray-700 rounded w-1/2 mx-auto"
            type="email"
            placeholder="Email"
            autoComplete="email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 my-2 bg-gray-700 rounded w-1/2 mx-auto"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
          />
          <button className="bg-red-600 py-3 my-6 rounded font-bold hover:bg-red-700 transition w-1/2 mx-auto">
            Sign In
          </button>
          <div className="flex justify-between items-center text-sm text-gray-400 w-1/2 mx-auto">
            <p>
              <input className="mr-2" type="checkbox" /> Remember me
            </p>
            <p className="cursor-pointer hover:underline">Need Help?</p>
          </div>
          <p className="py-8 text-center">
            <span className="cursor-pointer text-white hover:underline">
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
