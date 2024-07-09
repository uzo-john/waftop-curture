const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter">
        <h2>Subscribe to our newsletter</h2>
        <p>Never miss a bit. <br></br>Get notifications on our special sales packages,<br></br> new arrivals, and season's top choices.</p>
        <div className="newsletter-input">
          <input type="email" placeholder="Email" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023. Powered by Shopify. All Rights Reserved.</p>
      </div>
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/image/logo 2.png" alt="Logo" /> {/* Ensure you have a logo image */}
        </div>
        <div className="footer-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-use">Terms of Use</a>
        </div>
        <div className="footer-contact">
          <p>Contact us: <a href="mailto:waftopcouture@gmail.com">waftopcouture@gmail.com</a></p>
        </div>
        <div className="footer-social">
          <a href="#" className="social-icon">🔗</a>
          <a href="#" className="social-icon">🔗</a>
          <a href="#" className="social-icon">🔗</a>
          <a href="#" className="social-icon">🔗</a>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
