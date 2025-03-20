import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState(null);

  const login = (email, password) => {
    // In a real app, implement actual authentication here
    setIsLoggedIn(true);
    setEmail(email);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setEmail(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, email, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}