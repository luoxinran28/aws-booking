import React, { Component } from 'react'
import { getProducts } from '../../services/fakeProductsService'
import { getCategories } from '../../services/fakeCategoriesService';
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

  handleReset = () => { 
    this.setState({ products: getProducts(), searchCategory: "" });
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
    const categories = getCategories();
    this.setState({ products, categories });
  }

}
 
export default Products;