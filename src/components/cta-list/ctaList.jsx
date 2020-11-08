import React, { Component } from 'react'

class CtaList extends Component {

  state = {}

  handleSave = (event) => {
    const target = event.currentTarget;
    this.disableButton(target);
    this.props.onSave();
  }

  disableButton = (target) => {
    target.setAttribute("disabled", "true");
    target.innerText = "Saved";
    target.className = target.className.replace("btn-primary", "btn-success");
  }
  
  render() { 
    return ( 
      <React.Fragment>
        <button onClick={this.handleSave} className="btn btn-primary btn-sm">Save</button>
        <a href="#" className="btn btn-secondary btn-sm">More Info</a>
        <button onClick={this.props.onDelete} className="btn btn-danger btn-sm">Delete</button>
      </React.Fragment>
    );
  }
}
 
export default CtaList;