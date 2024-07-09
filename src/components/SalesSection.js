import React, { useState, useEffect } from 'react';
import SalesProductCard from './SalesProductCard'; // Ensure this path is correct

const SalesSection = ({ title, products, buttonLabel }) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setProductList(products);
  }, [products]);

  return (
    <div className="sales-section">
      <h2>{title}</h2>
      <div className="product-grid">
        {productList.map((product, index) => (
          <SalesProductCard 
            key={index}
            images={product.images} // Ensure the images prop is passed correctly
            title={product.title}
            price={product.price}
            reviews={product.reviews}
            buttonLabel={buttonLabel}
            shelf={product.shelf}
          />
        ))}
      </div>
    </div>
  );
};

export default SalesSection;
