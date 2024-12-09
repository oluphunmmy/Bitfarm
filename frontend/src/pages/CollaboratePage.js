import React from "react";

function CollaboratePage({ navigateTo }) {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-green-700">Collaborate</h1>
      <p className="mt-4 text-gray-600">
        Connect with other farmers, investors, and agribusiness experts to share knowledge and resources.
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

export default CollaboratePage;




// import React from "react";

// export default function Collaborate() {
//   const userTypes = ["Investor", "Land Owner", "Farmer", "Agritech Expert", "Unemployed Agric Graduate", "Buyer"];

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Collaborate</h2>
//       <p className="mb-6">Connect with other agricultural stakeholders:</p>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {userTypes.map((type, index) => (
//           <div key={index} className="p-4 border rounded shadow-sm">
//             <h3 className="text-xl font-semibold">{type}</h3>
//             <p className="mb-4">Connect with {type}s</p>
//             <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
//               View Profiles
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
