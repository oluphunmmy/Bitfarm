import React from "react";

function Marketplace({ navigateTo }) {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-green-700">Marketplace</h1>
      <p className="mt-4 text-gray-600">
        Discover and purchase agricultural products, tools, and services from trusted suppliers.
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

export default Marketplace;
























// import React, { useState } from "react";

// function MarketplacePage() {
//   const [listings, setListings] = useState([
//     { id: 1, title: "Fertile Farmland", price: 500000, description: "100 acres near river" },
//     { id: 2, title: "Modern Tractor", price: 75000, description: "State-of-the-art equipment" },
//   ]);

//   return (
//     <div className="container mx-auto py-10">
//       <h2 className="text-2xl font-bold mb-6">Marketplace</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {listings.map((listing) => (
//           <div key={listing.id} className="border p-4 rounded shadow">
//             <h3 className="font-bold text-lg">{listing.title}</h3>
//             <p>{listing.description}</p>
//             <p className="text-blue-500 font-bold">${listing.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default MarketplacePage;
