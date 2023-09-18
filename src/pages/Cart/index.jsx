import React from "react"

const Cart = ({ products }) => {

  const cartProducts = products.filter((product) => product.inCart);
  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cartProducts.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;