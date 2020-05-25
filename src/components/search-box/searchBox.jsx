import React, { Component } from 'react'
import Autocomplete from '../autocomplete/autocomplete';
import Trie from '../../utils/Trie';

class SearchBox extends Component {
  constructor(props) { 
    super(props);
    
    let trie = new Trie();
    this.state = {
      searchQuery: "",
      suggestions: [],
      trie: trie
    }
  }

  handleTextChange = (e) => {
    const value = e.currentTarget.value.toLowerCase().replace(/[^A-Z^a-z^0-9^\s]/g, '');
    // Process suggestions from all options
    let suggestions = this.state.trie.search(value);
    this.setState({ searchQuery: value, suggestions});
  }
  
  handleSearch = () => {
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
    if (e.keyCode === 27) { // Escape
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

  static getDerivedStateFromProps(props, state) {
    const { trie } = state;
    for (let option of props.options) { 
      trie.add(option);
    }

    return { trie };
  }

  render() { 

    const { suggestions } = this.state;

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

  componentDidMount() {
    document.addEventListener("click", (e) => { 
      if (e.target.classList.contains("autocomplete")) return;
      this.setState({ suggestions: [] });
    });
  }

}
 
export default SearchBox;