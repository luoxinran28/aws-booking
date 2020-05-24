import React, { Component } from 'react'
import { getProducts } from '../../services/fakeProductsService'
import Pagination from '../pagination/pagination'
import ResultList from '../result-list/resultList'

class Products extends Component {
  state = {
    products: [],
    pageSize: 3,
    currentPage: 1
  }

  handleReset = () => { 
    this.setState({ products: getProducts() });
  }

  handleDelete = (item) => {
    console.log(item)
    const products = this.state.products.filter(p => p._id !== item._id);
    this.setState({ products });
  }

  handlePageChange = (currentPage) => {
    this.setState({ currentPage });
  }

  getPagedData = () => {
    const { products: allProducts, pageSize, currentPage } = this.state;
    const startIndex = (currentPage - 1) * pageSize;
    let endIndex = (currentPage) * pageSize - 1;
    endIndex = endIndex >= allProducts.length ? allProducts.length - 1 : endIndex;
    const currentPagedData = allProducts.slice(startIndex, endIndex + 1);
    return { totalCount: allProducts.length, currentPageData: currentPagedData};
  }

  componentDidMount() { 
    const products = getProducts();
    this.setState({ products });
  }

  render() { 
    const { pageSize, currentPage } = this.state;
    const { totalCount, currentPageData: products } = this.getPagedData();

    if (totalCount === 0) return <h1>The products ran out.</h1>

    return (
      <React.Fragment>
        <p>We found {totalCount} products for you.</p>
        <button
          onClick={this.handleReset}
          className="btn btn-primary">Reset</button>
        <ResultList
          results={products}
          onDelete={this.handleDelete}
        />
        <Pagination
          itemsAmount={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>

    );
  }
}
 
export default Products;