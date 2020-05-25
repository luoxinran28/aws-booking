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

    // Process suggestions from all options
    let suggestions = options.filter(option => option.toLowerCase().startsWith(value));
    // Set search query based on typed text
    this.setState({ searchQuery: value, suggestions});
  }
  
  handleSearch = () => {
    // this.setState({ suggestions: [] });
    // this.props.onSearch(this.state.searchQuery);
    this.searchInProps();
  }

  handleSelectOption = (selection) => {
    this.searchInProps(selection);
    this.setState({ searchQuery: selection});
  }

  handleReset = () => {
    this.setState({ searchQuery: "", suggestions: [] });
    this.props.onReset();
  }

  handleKeyDown = (e) => {
    if (e.keyCode === 27) { // Escapte
      this.setState({ suggestions: [] });
    }
    if (e.keyCode === 13) { // Enter
      this.searchInProps();
    }
  }

  searchInProps = (query) => {
    if (!query) query = this.state.searchQuery;
    this.setState({ suggestions: [] });
    this.props.onSearch(query);
  }

  render() { 

    const { suggestions  } = this.state;

    return (
      <React.Fragment>
        <div className="search-box form-inline justify-content-center mt-3">
          <input
            type="text"
            value={this.state.searchQuery}
            className="form-control mx-2 w-50"
            aria-label="Search the categories"
            placeholder="Search the categories ..."
            onChange={this.handleTextChange}
            onKeyDown={this.handleKeyDown}
          />
          <button
            className="btn btn-primary mx-1"
            onClick={this.handleSearch}
          >Search</button>
          <button
            onClick={this.handleReset}
            className="btn btn-primary mx-1">Reset</button>
          <Autocomplete
            onSelect={this.handleSelectOption}
            options={suggestions}
          />
        </div>
      </React.Fragment>
    );
  }


}
 
export default SearchBox;