import React, { Component } from 'react'
import { getProducts } from '../../pages/mainpage/services/fakeProductsService'
import { getCategories } from '../../pages/mainpage/services/fakeCategoriesService';

import { productsRequested, productsDeleted } from './productsReducer.js';
import StoreContext from '../../contexts/storeContext.js'

import Pagination from '../pagination/pagination'
import ResultList from '../result-list/resultList'
import SearchBox from '../search-box/searchBox'

class Products extends Component {
  state = {
    products: [],
    categories: [],
    pageSize: 3,
    currentPage: 1,
    searchCategory: ""
  }

  static contextType = StoreContext;

  handleReset = () => { 
    const store = this.context;
    store.dispatch(productsRequested());
  }

  handleDelete = (item) => {
    const store = this.context;
    store.dispatch(productsDeleted({ item }));
  }

  handleSave = (item) => {
    window.cart = window.cart || {};
    window.cart.count = window.cart.count || 0;
    if(item) window.cart.count++;
  }

  handlePageChange = (currentPage) => {
    if(currentPage <= 0 || currentPage > this.state.pageSize) return;
    this.setState({ currentPage });
  }

  handleSearchChange = (value) => {
    this.setState({ searchCategory: value });
  }

  getPagedData = () => {
    const { products, pageSize, currentPage, searchCategory } = this.state;    
    let allProducts = products;
    if (searchCategory) { 
      let lowSearchCategory = searchCategory.toLowerCase();
      allProducts = allProducts.filter(item =>
        item.category.name.toLowerCase().startsWith(lowSearchCategory));
    }

    const startIndex = (currentPage - 1) * pageSize;
    let endIndex = (currentPage) * pageSize - 1;
    endIndex = endIndex >= allProducts.length ? allProducts.length - 1 : endIndex;
    const currentPagedData = allProducts.slice(startIndex, endIndex + 1);
    return { totalCount: allProducts.length, currentPageData: currentPagedData};
  }

  render() { 
    const { categories, searchCategory, pageSize, currentPage } = this.state;
    const { totalCount, currentPageData: products } = this.getPagedData();

    let categoriesNames = categories.map(c => c.name);

    return (
      <React.Fragment>
        <SearchBox
          searchQuery={searchCategory}
          options={categoriesNames}
          onReset={this.handleReset}
          onSearch={this.handleSearchChange}
        />
        {totalCount === 0 && (<h1 className="title">The products ran out.</h1>)}
        {totalCount !== 0 && (
          <ResultList
            totalResultAmount={totalCount}
            results={products}
            onSave={this.handleSave}
            onDelete={this.handleDelete}
          />
        )}
        <Pagination
          totalResultAmount={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>

    );
  }
  componentDidMount() { 
    const store = this.context;
    this.unsubscribe = store.subscribe(() => {
      const productsInStore = store.getState().lists;
      if (this.state.products !== productsInStore) { 
        this.setState({ products: productsInStore});
      }
    }); // Subscribe will be called once the state is changed.
    store.dispatch(productsRequested());
    const categories = getCategories();
    this.setState({ categories });
  }

  componentWillUnmount() { 
    this.unsubscribe();
  }
}
 
export default Products;