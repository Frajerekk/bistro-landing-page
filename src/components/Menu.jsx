import menuImg from '../assets/menu-items.jpg';

export default function Menu() {
  return (
    <section id="menu">
      <h2>Our Menu</h2>
      <div className="menu-image">
        <img src={menuImg} alt="Menu preview: pizza, burger, tacos" />
      </div>
      <div className="menu-items">
        <div className="menu-card">
          <h3>Pizza Margherita</h3>
          <span className="menu-price">$9.99</span>
          <p>Classic cheese & tomato pizza with fresh basil.</p>
        </div>
        <div className="menu-card">
          <h3>Bistro Burger</h3>
          <span className="menu-price">$11.50</span>
          <p>Juicy beef patty with cheddar and caramelized onions.</p>
        </div>
        <div className="menu-card">
          <h3>Vegan Tacos</h3>
          <span className="menu-price">$8.75</span>
          <p>Spicy beans, fresh veggies, and guacamole.</p>
        </div>
      </div>
    </section>
  );
}