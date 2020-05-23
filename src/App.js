import React from 'react';
import Products from './components/products/products';
import NavBar from './components/nav-bar/navBar';
import './App.css';

function App() {
  return (
    <main className="container"> 
      <NavBar />
      <Products />
    </main>
  );
}

export default App;
