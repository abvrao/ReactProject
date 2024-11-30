// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CartModal from "./components/CartModal";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleAddToCart = (product) => {
    const alreadyInCart = cart.find((item) => item.id === product.id);
    if (alreadyInCart) {
      alert("Item already added to the cart");
      return;
    }
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const handleCartModalToggle = () => {
    setIsCartModalOpen(!isCartModalOpen);
  };

  return (
    <div className="App">
      <Navbar cartCount={cart.length} onCartClick={handleCartModalToggle} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <CartModal
        isOpen={isCartModalOpen}
        onClose={handleCartModalToggle}
        cartItems={cart}
        onRemoveFromCart={handleRemoveFromCart}
      />
    </div>
  );
};

export default App;
