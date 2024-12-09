import React from "react";

function BuyersPage({ navigateTo }) {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-green-700">Buyers</h1>
      <p className="mt-4 text-gray-600">
        Find buyers for your produce and establish profitable partnerships.
      </p>
      <button
        className="mt-6 bg-green-700 text-white px-6 py-2 rounded"
        onClick={() => navigateTo("home")}
      >
        Back to Home
      </button>
    </div>
  );
}

export default BuyersPage;
