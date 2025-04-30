import heroImg from '../assets/hero-main-dish.jpg';

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Hot & Fresh Street Food</h1>
          <p>Delicious meals served fast – pizza, burgers, tacos & more!</p>
          <a href="#menu">See Menu</a>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="Signature dish" />
        </div>
      </div>
    </section>
  );
}