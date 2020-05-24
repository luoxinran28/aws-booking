import React from 'react';
import Products from './components/products/products';
import NavBar from './components/nav-bar/navBar';
import './App.scss';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container"> 
        <Products />
      </main>
    </React.Fragment>
  );
}

export default App;
