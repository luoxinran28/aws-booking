import React, { Component } from 'react'
import { getProducts } from '../services/fakeProductsService'
import AmazonLogo from '../assets/Amazon_logo.svg'

class Products extends Component {
  state = { 
    products: getProducts()
  }

  handleDelete = (product) => { 
    const { products } = this.state;
    const newProducts = products.filter(p => p._id !== product._id);
    this.setState({ products: newProducts });
  }

  render() { 
    const { products } = this.state;
    if(products.length === 0) return <h1>The products ran out.</h1>

    return (
      <React.Fragment>
        <p>We found {products.length} for you.</p>
        <div className="col-sm-3">
          <ul className="list-group list-group-flush">
            {
              products.map(product => (
                <li key={product._id} className="list-group-item" style={{ width: 300, display: 'inline-block' }}>
                  <div className="card">
                    <div className="card-body">
                      <img src={AmazonLogo} className="card-img-top" alt={"Amazon Prime Placeholder"}/>
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>
                      <button onClick={() => this.handleDelete(product)} className="btn btn-danger btn-small">Delete</button>
                    </div>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
      </React.Fragment>

    );
  }
}
 
export default Products;