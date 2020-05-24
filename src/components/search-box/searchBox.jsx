import React, { Component } from 'react'

class SearchBox extends Component {
  state = {}
  
  render() { 

    const { onSearch, onReset, onChange } = this.props;

    return (
      <React.Fragment>
        <div className="form-inline justify-content-center">
          <input
            type="text"
            className="form-control my-3 mx-2 w-50"
            aria-label="Search the categories"
            placeholder="Search the categories"
            onChange={e => onChange(e.currentTarget.value)}
          />
          <button
            className="btn btn-primary mx-1"
            onClick={onSearch}
          >Search</button>
          <button
            onClick={onReset}
            className="btn btn-primary mx-1">Reset</button>
        </div>
      </React.Fragment>
    );
  }
}
 
export default SearchBox;