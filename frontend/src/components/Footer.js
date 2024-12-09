import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-green-700 text-white text-center p-4 mt-8">
      <p>&copy; {year} BitFarm. All rights reserved.</p>
    </footer>
  );
}

export default Footer;