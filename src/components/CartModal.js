// src/components/CartModal.js
import React from "react";
import { Dialog } from "@headlessui/react";

const CartModal = ({ isOpen, onClose, cartItems, onRemoveFromCart }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-10">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="bg-white rounded-lg w-1/2 p-6">
          <h2 className="text-lg font-bold mb-4">Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty!</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center mb-4 border-b pb-2"
                >
                  {/* Product Information */}
                  <div>
                    <p className="font-bold">{item.title}</p>
                    <p className="text-green-600">Rs. {(item.price*85).toFixed(0)}</p>
                  </div>
                  {/* Remove Button */}
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                    onClick={() => onRemoveFromCart(item.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
          {/* Close Button */}
          <button
            className="bg-gray-800 text-white px-4 py-2 mt-4 rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default CartModal;
