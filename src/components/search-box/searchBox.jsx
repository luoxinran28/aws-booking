import React, { Component } from 'react'
import Autocomplete from '../autocomplete/autocomplete';

class SearchBox extends Component {
  state = {
    searchQuery: "",
    suggestions: []
  }

  handleTextChange = (e) => {
    const { options } = this.props;
    const value = e.currentTarget.value;
    if (value.length === 0) {
      this.setState({ suggestions: [] });
    } else { 
      // Process suggestions from all options
      let suggestions = options.filter(option => option.toLowerCase().startsWith(value));
      // Set search query based on typed text
      this.setState({ searchQuery: value, suggestions});
    }
  }
  
  handleSearch = () => {
    const { onSearch } = this.props;
    const { searchQuery } = this.state;

    onSearch(searchQuery);
  }

  handleReset = () => {
    const { onReset } = this.props;
    this.setState({ searchQuery: "" });
    onReset();
  }

  render() { 

    const { suggestions  } = this.state;

    return (
      <React.Fragment>
        <div className="search-box form-inline justify-content-center mt-3">
          <input
            type="text"
            className="form-control mx-2 w-50"
            aria-label="Search the categories"
            placeholder="Search the categories ..."
            onChange={this.handleTextChange}
          />
          <button
            className="btn btn-primary mx-1"
            onClick={this.handleSearch}
          >Search</button>
          <button
            onClick={this.handleReset}
            className="btn btn-primary mx-1">Reset</button>
          <Autocomplete
            options={suggestions}
          />
        </div>
      </React.Fragment>
    );
  }
}
 
export default SearchBox;