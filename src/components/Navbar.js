// src/components/Navbar.js
import React from 'react';

const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav className="flex justify-between items-center bg-blue-600 text-white p-4">
      <h1 className="text-lg font-bold">Fake Store</h1>
      <button
        className="bg-white text-blue-600 px-4 py-2 rounded"
        onClick={onCartClick}
      >
        Cart ({cartCount})
      </button>
    </nav>
  );
};

export default Navbar;
