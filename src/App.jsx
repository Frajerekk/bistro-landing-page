import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';

function App() {
  const [orderOpen, setOrderOpen] = useState(false);

  return (
    <div>
      <Navbar onOrderClick={() => setOrderOpen(true)} />
      <Hero />
      <Menu />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <OrderModal isOpen={orderOpen} onClose={() => setOrderOpen(false)} />
    </div>
  );
}

export default App;