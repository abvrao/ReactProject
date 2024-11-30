// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="border rounded-lg hover:scale-105 transition duration-700 ease-in-out p-4 shadow-lg">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-2"
      />
      <h2 className="text-lg font-bold">{product.title}</h2>
      <p className="text-green-600 font-bold">Rs. {(product.price*85).toFixed(0)}</p>
      <button
        className="bg-blue-600 text-white px-4 py-2 mt-2 rounded"
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
