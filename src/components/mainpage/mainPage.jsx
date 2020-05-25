import React, { Component } from 'react';
import Products from '../products/products';

class MainPage extends Component {
  state = {  }
  render() { 
    return (
      <main className="container"> 
        <Products />
      </main>
    );
  }
}
 
export default MainPage;