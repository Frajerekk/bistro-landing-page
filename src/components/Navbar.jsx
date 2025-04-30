export default function Navbar({ onOrderClick }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo"><i className="fas fa-utensils"></i> BistroStreet</h1>
        <ul className="nav-links">
          <li><a href="#menu"><i className="fas fa-pizza-slice"></i> Menu</a></li>
          <li><a href="#contact"><i className="fas fa-map-marker-alt"></i> Contact</a></li>
          <li>
            <button className="order-button" onClick={onOrderClick}>
              <i className="fas fa-motorcycle"></i> Order Now
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}