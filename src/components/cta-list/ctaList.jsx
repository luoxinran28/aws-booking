import React, { Component } from 'react'

class CtaList extends Component {

  state = {}
  
  render() { 
    return ( 
      <React.Fragment>
        <a href="/" className="btn btn-secondary btn-sm">More Info</a>
        <button onClick={this.props.onDelete} className="btn btn-danger btn-sm">Delete</button>
      </React.Fragment>
    );
  }
}
 
export default CtaList;