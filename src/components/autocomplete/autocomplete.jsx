import React, { Component }from 'react'

class Autocomplete extends Component {

  state = {}

  renderSuggestion = () => { 
    const { options, onSelect } = this.props;

    if (!options || options.length === 0) return null;
    return (
      <ul className="list-group ">
        {options.map((option) => (
          <li key={option}
            className="list-group-item list-group-item-action"
            onClick={() => onSelect(option)}
          ><span>{option}</span></li>
        ))}
      </ul> 
    )
  }

  render() { 
    return (
      <div className="autocomplete d-flex mt-1">
        {this.renderSuggestion()}
      </div>
    );
  }
}
 
export default Autocomplete;