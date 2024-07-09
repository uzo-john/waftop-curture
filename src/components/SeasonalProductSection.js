import React, { useState, useEffect } from 'react';
import SeasonalProductCard from './SeasonalProductCard';

const SeasonalProductSection = ({ title, products, buttonLabel }) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setProductList(products);
  }, [products]);

  return (
    <div className="seasonal-product-section">
      <h2>{title}</h2>
      <div className="product-grid">
        {productList.map((product, index) => (
          <SeasonalProductCard 
            key={index}
            image={product.image}
            title={product.title}
            price={product.price}
            reviews={product.reviews}
            buttonLabel={buttonLabel}
          />
        ))}
      </div>
    </div>
  );
};

export default SeasonalProductSection;
