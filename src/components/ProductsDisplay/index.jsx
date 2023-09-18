import React, { useState } from "react";

const ProductsDisplay = ({ products }) => {
  const [updatedProducts, setUpdatedProducts] = useState(products);

  const handleProductClick = (id) => {
    const clickedProduct = updatedProducts.find((product) => product.id === id); 

    if (clickedProduct) {
   
      clickedProduct.inCart = true;

      const updatedProductsArray = updatedProducts.map((product) =>
        product.id === id ? clickedProduct : product
      );

      setUpdatedProducts(updatedProductsArray);
    }
  };

  return (
    <div>
      {products.map((product) => (
        <div key={product.id} onClick={() => handleProductClick(product.id)}>
          {product.name}
        </div>
      ))}
    </div>
  );
};

export default ProductsDisplay;