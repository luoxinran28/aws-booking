import React, { Component } from 'react'
import { getProducts } from '../../services/fakeProductsService'
import Pagination from '../pagination/pagination'
import ResultList from '../result-list/resultList'
import SearchBox from '../search-box/searchBox'

class Products extends Component {
  state = {
    products: [],
    pageSize: 3,
    currentPage: 1,
    searchCategory: ""
  }

  handleReset = () => { 
    this.setState({ products: getProducts() });
  }

  handleDelete = (item) => {
    const products = this.state.products.filter(p => p._id !== item._id);
    this.setState({ products });
  }

  handlePageChange = (currentPage) => {
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
    const { pageSize, currentPage } = this.state;
    const { totalCount, currentPageData: products } = this.getPagedData();

    return (
      <React.Fragment>
        <SearchBox
          onChange={this.handleSearchChange}
        />
        {totalCount === 0 && (<h1>The products ran out.</h1>)}
        {totalCount !== 0 && (
          <ResultList
            totalResultAmount={totalCount}
            results={products}
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
    const products = getProducts();
    this.setState({ products });
  }

}
 
export default Products;