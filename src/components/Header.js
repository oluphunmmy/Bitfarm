import React from "react";
import { Link } from "react-router-dom";

function Header({ user, setUser }) {
  return (
    <header className="bg-green-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">🚜 BitFarm</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/marketplace" className="hover:underline">Marketplace</Link>
          <Link to="/buyers" className="hover:underline">Buyers</Link>
          <Link to="/collaborate" className="hover:underline">Collaborate</Link>
          <Link to="/analytics" className="hover:underline">Analytics</Link>
          {user ? (
            <button
              onClick={() => setUser(null)}
              className="bg-white text-green-500 px-3 py-1 rounded"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="bg-white text-green-500 px-3 py-1 rounded">
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
