import React, { Component } from 'react';
import Products from '../../components/products/products';
import productsStore from '../../components/products/productsStore.js';
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