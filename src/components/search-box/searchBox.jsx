import React, { Component } from 'react'

class SearchBox extends Component {
  state = {}
  
  

  render() { 

    const { onSearch, onReset } = this.props;

    return (
      <React.Fragment>
        <div className="form-inline justify-content-center">
          <input
            type="text"
            className="form-control my-3 mx-2 w-50"
            aria-label="Search the categories"
            placeholder="Search the categories" />
          
          <button
            className="btn btn-primary mx-1"
            onClick={this.onSearch}
          >
            Search
          </button>
          <button
            onClick={this.onReset}
            className="btn btn-primary mx-1">Reset</button>
        </div>
      </React.Fragment>
    );
  }
}
 
export default SearchBox;