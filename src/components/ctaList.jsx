import React, { Component } from 'react'

class CtaList extends Component {

  state = {}
  
  render() { 
    return ( 
      <React.Fragment>
        <button className="btn btn-secondary btn-sm">More Info</button>
        <button onClick={this.props.onDelete} className="btn btn-danger btn-sm">Delete</button>
      </React.Fragment>
    );
  }
}
 
export default CtaList;