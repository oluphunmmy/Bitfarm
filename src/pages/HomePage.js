import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="container mx-auto text-center py-10">
      <h2 className="text-2xl font-bold mb-4">Welcome to BitFarm 🌾</h2>
      <p className="mb-6">Connecting Agricultural Professionals and Opportunities</p>
      <Link
        to="/get-started"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Get Started
      </Link>
    </div>
  );
}

export default HomePage;
