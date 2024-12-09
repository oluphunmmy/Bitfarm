import React from "react";

function GetStartedPage({ navigateTo }) {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-green-700">Get Started</h1>
      <p className="mt-4 text-gray-600">
        Join BitFarm today to explore innovative solutions for sustainable farming.
      </p>
      <button
        className="mt-6 bg-green-700 text-white px-6 py-2 rounded"
        onClick={() => navigateTo("signup")}
      >
        Sign Up Now
      </button>
    </div>
  );
}

export default GetStartedPage;