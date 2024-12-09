import React from "react";

function HomePage({ navigateTo }) {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-green-700">Welcome to BitFarm 🌾</h1>
      <p className="mt-4 text-gray-600">
        Revolutionizing agriculture with technology. Explore our solutions for sustainable farming.
      </p>
      <button
        className="mt-6 bg-green-700 text-white px-6 py-2 rounded"
        onClick={() => navigateTo("get-started")}
      >
        Get Started
      </button>
    </div>
  );
}

export default HomePage;







// import React from "react";
// import { Link } from "react-router-dom";

// function HomePage() {
//   return (
//     <div className="container mx-auto text-center py-10">
//       <h2 className="text-2xl font-bold mb-4">Welcome to BitFarm 🌾</h2>
//       <p className="mb-6">Connecting Agricultural Professionals and Opportunities</p>
//       <Link
//         to="/get-started"
//         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//       >
//         Get Started
//       </Link>
//     </div>
//   );
// }

// export default HomePage;

// function HomePage({ navigateTo }) {
//   return (
//     <div style={styles.page}>
//       <h1>Welcome to BitFarm!🌾</h1>
//       <p>
//         Empowering farmers and investors through a collaborative platform. Join us today to access tools, insights, and opportunities to grow your agricultural journey.
//       </p>
//       <button onClick={() => navigateTo('get-started')} style={styles.formButton}>
//         Get Started
//       </button>
//     </div>
//   );
// }

// function GetStartedPage({ navigateTo }) {
//   return (
//     <div style={styles.page}>
//       <h1>Get Started with BitFarm</h1>
//       <p>
//         Whether you are a farmer, investor, or agri-tech enthusiast, BitFarm provides resources and a vibrant community to help you achieve your goals.
//       </p>
//       <button onClick={() => navigateTo('signup')} style={styles.formButton}>
//         Sign Up Now
//       </button>
//       <button onClick={() => navigateTo('login')} style={styles.formButton}>
//         Login
//       </button>
//     </div>
//   );
// }
