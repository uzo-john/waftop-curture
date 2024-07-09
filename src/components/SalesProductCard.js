const SalesProductCard = ({ images, title, price, reviews, buttonLabel, shelf }) => {
    return (
      <div className="sales-product-card">
        <div className="product-images">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`${title}-${index}`} />
          ))}
        </div>
        <div className="product-info">
          <h3>{title}</h3>
          <p>{price}</p>
          <p>{reviews} Reviews</p>
          <p>{shelf}</p>
          <button>{buttonLabel}</button>
        </div>
      </div>
    );
  };
  
  export default SalesProductCard;
  