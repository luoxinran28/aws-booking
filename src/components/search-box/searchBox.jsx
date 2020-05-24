import React, { Component } from 'react'
import Autocomplete from '../autocomplete/autocomplete';

class SearchBox extends Component {
  state = {
    searchQuery: "",
    suggestions: []
  }

  handleTextChange = (e) => {
    const value = e.currentTarget.value;
    if (value.length === 0) {
      this.setState({ suggestions: [] });
    } else { 
      // Process suggestions from all options
      let suggestions = this.state.suggestions;

      // Set search query based on typed text
      this.setState({ searchQuery: value });
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
        <div className="form-inline justify-content-center">
          <input
            type="text"
            className="form-control my-3 mx-2 w-50"
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
        </div>
        <Autocomplete
          options={suggestions}
        />
      </React.Fragment>
    );
  }
}
 
export default SearchBox;