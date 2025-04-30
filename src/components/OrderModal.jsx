import { useState } from 'react';

const menu = [
  { id: 1, name: 'Pizza Margherita', price: 9.99 },
  { id: 2, name: 'Bistro Burger', price: 11.5 },
  { id: 3, name: 'Vegan Tacos', price: 8.75 }
];

export default function OrderModal({ isOpen, onClose }) {
  const [cart, setCart] = useState({});
  const [form, setForm] = useState({ name: '', phone: '' });

  const addToCart = (item) => {
    setCart(prev => {
      const current = prev[item.id] || { ...item, quantity: 0 };
      return {
        ...prev,
        [item.id]: { ...current, quantity: current.quantity + 1 }
      };
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => {
      const current = { ...prev };
      if (current[id].quantity > 1) {
        current[id].quantity -= 1;
      } else {
        delete current[id];
      }
      return current;
    });
  };

  const total = Object.values(cart).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  ).toFixed(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    const summary = Object.values(cart)
      .map(i => `${i.name} × ${i.quantity}`)
      .join(', ');
    alert(`Order sent!\nName: ${form.name}\nPhone: ${form.phone}\nItems: ${summary}\nTotal: $${total}`);
    onClose();
    setCart({});
    setForm({ name: '', phone: '' });
  };

  if (!isOpen) return null;

  return (
    <div className="order-modal-overlay" onClick={onClose}>
      <div className="order-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-icon" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        <h2>Place Your Order</h2>

        <ul className="order-menu">
          {menu.map(item => (
            <li key={item.id}>
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
              <button onClick={() => addToCart(item)}>Add</button>
            </li>
          ))}
        </ul>

        {Object.keys(cart).length > 0 ? (
          <>
            <h3>Your Cart</h3>
            <ul className="order-cart">
              {Object.values(cart).map(item => (
                <li key={item.id}>
                  {item.name} × {item.quantity} – ${(item.price * item.quantity).toFixed(2)}
                  <div className="qty-controls">
                    <button onClick={() => removeFromCart(item.id)}>-</button>
                    <button onClick={() => addToCart(item)}>+</button>
                  </div>
                </li>
              ))}
            </ul>
            <p>Total: <strong>${total}</strong></p>
            <form onSubmit={handleSubmit} className="order-form">
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <input
                type="tel"
                placeholder="Phone number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
              />
              <button type="submit">Confirm Order</button>
            </form>
          </>
        ) : (
          <p>No items in cart yet.</p>
        )}
      </div>
    </div>
  );
}