import React from 'react'

const Autocomplete = (props) => {
  const { options } = props;
  
  function renderSuggestion(options) { 
    if (!options || options.length === 0) return null;
    return (
      <ul className="list-group ">
        {options.map((option) => (
          <li className="list-group-item list-group-item-action" key={option}><span>{option}</span></li>
        ))}
      </ul> 
    )
  }

  return (
    <div className="autocomplete d-flex mt-1">
      {renderSuggestion(options)}
    </div>
  );
}
 
export default Autocomplete;