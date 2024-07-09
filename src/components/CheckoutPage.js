import React from 'react';


const CheckoutPage = () => {
  return (
    <div className="checkout-page">
      <div className="checkout-steps">
        <div className="step active">Shopping</div>
        <div className="step active">Payment</div>
        <div className="step">Confirmation</div>
      </div>
      <div className="checkout-content">
        <div className="product-summary">
          <img src="/image/IMG_E7455 3.png" alt="Flower Print Low Neck Line Backless Crop Top" />
          <div className="product-details">
            <p>FLOWER PRINT LOW NECK LINE BACKLESS CROP TOP</p>
            <p>₦13,400.00</p>
          </div>
        </div>
        <div className="payment-section">
          <div className="payment-method">
            <h3>Payment Method</h3>
            <div className="payment-options">
              <label>
                <input type="radio" name="payment" value="mastercard" defaultChecked />
                <img src="/image/master.png" alt="MasterCard" />
              </label>
              <label>
                <input type="radio" name="payment" value="paypal" />
                <img src="/image/PayPal-Logo.png" alt="PayPal" />
              </label>
              <label>
                <input type="radio" name="payment" value="bank" />
                <img src="/image/paystack-opengraph.png" alt="Bank" />
              </label>
            </div>
          </div>
          <div className="payment-details">
            <h3>Payment Details</h3>
            <form>
              <label>
                Name on Card
                <input type="text" defaultValue="Patrick Paul" />
              </label>
              <label>
                Card Number
                <input type="text" defaultValue="**** **** **** 7689" />
              </label>
              <label>
                Expiration Date
                <input type="text" defaultValue="10/29" />
              </label>
              <label>
                CCV
                <input type="text" defaultValue="339" />
              </label>
                <div className='confirm'><span>
                  By clicking “Confirm payment I agree to the company’s terms<br></br> of service.
                </span></div>
                <div className="checkout-buttons">
                    <button className="back-button">Back</button>
                    <button className="confirm-button">Confirm Payment: ₦13,400</button>
                </div>
                <div className="terms">
                    <input type="checkbox" defaultChecked />
                    <span>a,receipt would be sent to your registered email</span>
                </div>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default CheckoutPage;
