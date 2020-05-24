import React, { Component } from 'react'
import { getProducts } from '../../services/fakeProductsService'
import AmazonLogo from '../../assets/Amazon_logo.svg'
import CTAList from '..//cta-list/ctaList'
import Pagination from '../pagination/pagination'

class Products extends Component {
  state = {
    products: [],
    pageSize: 3,
    currentPage: 1
  }

  handleReset = () => { 
    this.setState({ products: getProducts() });
  }

  handleDelete = (product) => { 
    const products = this.state.products.filter(p => p._id !== product._id);
    this.setState({ products });
  }

  handlePageChange = (currentPage) => {
    this.setState({ currentPage });
  }

  componentDidMount() { 
    const products = getProducts();
    this.setState({ products });
  }

  render() { 
    const { products, pageSize, currentPage } = this.state;
    const totalCount = products.length;

    if (totalCount === 0) return <h1>The products ran out.</h1>

    return (
      <React.Fragment>
        <p>We found {products.length} for you.</p>
        <button
          onClick={this.handleReset}
          className="btn btn-primary">Reset</button>
        <div className="row">
          {
            products.map(product => (
              <div key={product._id} className="col-sm-6 col-lg-4 mt-4 md-4" data-testid="product-item">
                <div className="card">
                  <div className="card-body">
                    <img src={AmazonLogo} className="card-img-top" alt={"Amazon Prime Placeholder"}/>
                    <h5 className="card-title mt-4">{product.title}</h5>
                    <p className="card-text mt-2">{product.description}</p>
                    <CTAList
                      onDelete={() => this.handleDelete(product)}
                    />
                  </div>
                </div>
              </div>
            ))
          }
        </div>
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