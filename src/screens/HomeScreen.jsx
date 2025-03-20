import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomeScreen() {
  const navigate = useNavigate();
  
  const categories = [
    { name: 'Christmas Tree', icon: '🎄' },
    { name: 'Lights', icon: '💡' },
    { name: 'Stockings', icon: '🧦' },
    { name: 'Ornaments', icon: '🎨' },
    { name: 'Tinsel', icon: '✨' },
    { name: 'Tree Topper', icon: '⭐' },
    { name: 'Candles', icon: '🕯️' },
    { name: 'Reindeer', icon: '🦌' },
    { name: 'Fireplace Décor', icon: '🏠' },
    { name: 'Book a Stylist', icon: '👤' }
  ];

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
        <h1>Christmas Shop</h1>
        <button onClick={() => navigate('/checkout')} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
          🛒
        </button>
      </header>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
        gap: '16px',
        padding: '16px'
      }}>
        {categories.map((category) => (
          <div
            key={category.name}
            onClick={() => navigate(`/menu/${encodeURIComponent(category.name)}`)}
            style={{
              background: 'white',
              padding: '16px',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
              textAlign: 'center'
            }}
          >
            <div style={{ fontSize: '32px' }}>{category.icon}</div>
            <div style={{ marginTop: '8px', fontWeight: 'bold' }}>{category.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;