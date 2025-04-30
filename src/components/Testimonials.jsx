import happyCustomer from '../assets/happy-customer.jpg';

export default function Testimonials() {
  return (
    <section id="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-card">
        <img src={happyCustomer} alt="Happy customer enjoying pizza" />
        <blockquote>
          <p>“Best pizza I've ever had! Friendly staff and cozy vibe.”</p>
          <footer>— Alex R.</footer>
        </blockquote>
      </div>
    </section>
  );
}