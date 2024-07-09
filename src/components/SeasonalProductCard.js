const SeasonalProductCard = ({ image, title, price, reviews, buttonLabel }) => {
    return (
      <div className="seasonal-product-card">
        <img src={image} alt={title} className="product-image" />
        <h3>{title}</h3>
        <p>{price}</p>
        {/* <p>{reviews} Reviews</p> */}
        <p className="see-details">See details</p>
        <button>{buttonLabel}</button>
      </div>
    );
  };
  
  export default SeasonalProductCard;
  