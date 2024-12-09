import React from "react";

function Header({ isLoggedIn, user, navigateTo, onLogout }) {
  return (
    <header className="bg-green-600 text-white p-4 flex justify-between items-center shadow-lg">
      <div
        className="text-xl font-bold cursor-pointer"
        onClick={() => navigateTo("home")}
      >
        🚜 BitFarm
      </div>
      <nav className="flex gap-4">
        <button
          className="bg-green-500 hover:bg-green-700 text-white px-3 py-2 rounded transition"
          onClick={() => navigateTo("marketplace")}
        >
          Marketplace
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white px-3 py-2 rounded transition"
          onClick={() => navigateTo("buyers")}
        >
          Buyers
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white px-3 py-2 rounded transition"
          onClick={() => navigateTo("collaborate")}
        >
          Collaborate
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white px-3 py-2 rounded transition"
          onClick={() => navigateTo("ai-consultation")}
        >
          AI Consultation
        </button>
        {!isLoggedIn ? (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-2 rounded transition"
            onClick={() => navigateTo("login")}
          >
            Login
          </button>
        ) : (
          <div className="flex items-center gap-4">
            <span className="text-sm">Welcome, {user.username}</span>
            <button
              className="bg-red-500 hover:bg-red-700 text-white px-3 py-2 rounded transition"
              onClick={onLogout}
            >
              Logout
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
