import React, { useState, useEffect } from 'react';
import FeaturedProductCard from './FeaturedProductCard';

const FeaturedProductSection = ({ title, products, buttonLabel }) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setProductList(products);
  }, [products]);

  return (
    <div className="featured-product-section">
      <h2>{title}</h2>
      <div className="product-grid">
        {productList.map((product, index) => (
          <FeaturedProductCard 
            key={index}
            images={product.images} // Ensure images are passed correctly
            title={product.title}
            price={product.price}
            reviews={product.reviews}
            shelf={product.shelf}
            buttonLabel={buttonLabel}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProductSection;
