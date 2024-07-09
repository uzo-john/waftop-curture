const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="/image/logo 2.png" alt="logo" />
            </div>
            <ul className="navbar-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/contact">Contact Us</a></li>
            </ul>
            <button className="navbar-signup">Sign Up</button>
        </nav>
     );
}
 
export default Navbar;