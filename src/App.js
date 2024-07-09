import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SeasonalProductSection from './components/SeasonalProductSection';
import FeaturedProductSection from './components/FeaturedProductSection';
import SalesSection from './components/SalesSection';
import CheckoutPage from './components/CheckoutPage';
import Footer from './components/Footer';



function App() {
  const seasonalTrendies = [
    {
      image: '/image/IMG_E7433 2.png',
    },
    {
      image: '/image/IMG_E7440 2.png',
    },
    {
      image: '/image/IMG_E7437 1.png',
  
    },
    {
      image: '/image/IMG_E7453 1.png',
    },
    
  ];

  const featuredProducts = [
    {
      images: ['/image/IMG_7580 1.png'], // Ensure this is an array
      title: 'Ankara Print Batwing Sleeves',
      price: '₦17,900.00',
      reviews: '5.4',
      shelf: "Women's Shelf"
    },
    {
      images: ['/image/IMG_E7463 1.png'], // Ensure this is an array
      title: 'Waftop Lip gloss',
      price: '₦6,300.00',
      reviews: '5.4',
      shelf: 'Lip Gloss'
    },
    {
      images: ['/image/IMG_7578 1.png'], // Ensure this is an array
      title: 'Flower Print Buttoned Short Sleeve T-Shirt',
      price: '₦13,400.00',
      reviews: '5.4',
      shelf: "Men's Shelf"
    },
  ];
  
  const salesProducts = [
    {
      images: ['/image/IMG_7580 1.png'], // Use array for images prop
      title: 'Ankara Print Batwing Sleeves',
      price: '₦15,000.00',
      reviews: '5.0',
      shelf: 'Women\'s Shelf'
    },
    {
      images: ['/image/IMG_E7461 1.png'],
      title: 'Waftop Lip gloss',
      price: '₦5,000.00',
      reviews: '4.8',
      shelf: 'Lip Gloss'
    },
    {
      images: ['/image/IMG_7578 1.png'],
      title: 'Flower Print Buttoned Short Sleeve T-Shirt',
      price: '₦12,000.00',
      reviews: '4.7',
      shelf: 'Men\'s Shelf'
    },
    {
      images: ['/image/IMG_7578 1.png'],
      title: 'Flower Print Buttoned Short Sleeve T-Shirt',
      price: '₦12,000.00',
      reviews: '4.7',
      shelf: 'Men\'s Shelf'
    },
    {
      images: ['/image/IMG_7578 1.png'],
      title: 'Flower Print Buttoned Short Sleeve T-Shirt',
      price: '₦12,000.00',
      reviews: '4.7',
      shelf: 'Men\'s Shelf'
    },
    {
      images: ['/image/IMG_7578 1.png'],
      title: 'Flower Print Buttoned Short Sleeve T-Shirt',
      price: '₦12,000.00',
      reviews: '4.7',
      shelf: 'Men\'s Shelf'
    },
    {
      images: ['/image/IMG_7578 1.png'],
      title: 'Flower Print Buttoned Short Sleeve T-Shirt',
      price: '₦12,000.00',
      reviews: '4.7',
      shelf: 'Men\'s Shelf'
    },
    {
      images: ['/image/IMG_7578 1.png'],
      title: 'Flower Print Buttoned Short Sleeve T-Shirt',
      price: '₦12,000.00',
      reviews: '4.7',
      shelf: 'Men\'s Shelf'
    },
    {
      images: ['/image/IMG_E7452 1.png'],
      title: 'Flower Print Buttoned Short Sleeve T-Shirt',
      price: '₦12,000.00',
      reviews: '4.7',
      shelf: 'Men\'s Shelf'
    },
    {
      images: ['/image/IMG_E7441 1.png'],
      title: 'Flower Print Buttoned Short Sleeve T-Shirt',
      price: '₦12,000.00',
      reviews: '4.7',
      shelf: 'Men\'s Shelf'
    },
    {
      images: ['/image/IMG_E7440 2.png'],
      title: 'Flower Print Buttoned Short Sleeve T-Shirt',
      price: '₦12,000.00',
      reviews: '4.7',
      shelf: 'Men\'s Shelf'
    },
    {
      images: ['/image/IMG_7578 1.png'],
      title: 'Flower Print Buttoned Short Sleeve T-Shirt',
      price: '₦12,000.00',
      reviews: '4.7',
      shelf: 'Men\'s Shelf'
    },
  ];
  
  
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <div className="content">
      <SeasonalProductSection title="Seasonal Trendies" products={seasonalTrendies} buttonLabel="Add to cart" />
      <FeaturedProductSection title="Featured Products" products={featuredProducts} buttonLabel="See details" />
      <SalesSection title="Sales Products" products={salesProducts} buttonLabel="Buy Now" /> {/* Add the sales section */}
      </div>
      <CheckoutPage />
      <Footer />
    </div>
  );
}

export default App;