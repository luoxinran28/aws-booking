import React, { Component } from 'react';
import Products from '../products/products';
import productsStore from '../products/productsStore.js';
import StoreContext from '../../contexts/storeContext.js'

class MainPage extends Component {
  state = {  }
  render() { 
    return (
      <main className="container"> 
        <StoreContext.Provider value={productsStore()}>
          <Products />
        </StoreContext.Provider>
      </main>
    );
  }
}
 
export default MainPage;