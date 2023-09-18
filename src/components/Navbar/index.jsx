import React from 'react';
import { Link } from "react-router-dom"

const Navbar = ({ products }) => {
  
  const randomIndex = Math.floor(Math.random() * products.length);
  const randomProduct = products[randomIndex];

  return (
    <div>
      <div>Random Product: {randomProduct.name}</div>
      <Link to="/">Products</Link>
      <Link to="/cart">Cart</Link>
    </div>
  );
};

export default Navbar;