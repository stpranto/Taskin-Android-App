import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import { CartProvider } from './providers/CartProvider';
import { AuthProvider } from './providers/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/menu/:category" element={<MenuScreen />} />
          <Route path="/checkout" element={<CheckoutScreen />} />
        </Routes>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;