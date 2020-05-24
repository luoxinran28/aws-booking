import React from 'react'

const Autocomplete = (props) => {
  const { options } = props;
  
  function renderSuggestion(options) { 
    if (!options || options.length === 0) return null;
    return (
      <ul>
        {options.map((option) => (
          <li key={option}><span>{option}</span></li>
        ))}
      </ul> 
    )
  }

  return (
    <div className="autocomplete">
      {renderSuggestion(options)}
    </div>
  );
}
 
export default Autocomplete;