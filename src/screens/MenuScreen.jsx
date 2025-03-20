import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../providers/CartProvider';

function MenuScreen() {
  const { category } = useParams();
  const navigate = useNavigate();
  const { addToCart, cartItems } = useCart();

  const items = Array.from({ length: 10 }, (_, index) => ({
    id: `${category.toLowerCase()}_${index}`,
    title: `${category} Item ${index + 1}`,
    price: (index + 1) * 10.99,
    description: `Beautiful ${category} decoration for your home`,
    image: 'https://via.placeholder.com/150'
  }));

  return (
    <div>
      <header style={{
        padding: '16px',
        background: '#2196f3',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1>{category}</h1>
        <button onClick={() => navigate('/checkout')} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
          🛒 {cartItems.length > 0 && `(${cartItems.length})`}
        </button>
      </header>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '16px',
        padding: '16px'
      }}>
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              background: 'white',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden'
            }}
          >
            <img src={item.image} alt={item.title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <div style={{ padding: '16px' }}>
              <h3 style={{ margin: '0 0 8px 0' }}>{item.title}</h3>
              <p style={{ margin: '0 0 8px 0', color: '#2196f3', fontWeight: 'bold' }}>
                ${item.price.toFixed(2)}
              </p>
              <button
                onClick={() => addToCart(item)}
                style={{
                  width: '100%',
                  padding: '8px',
                  background: '#2196f3',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuScreen;