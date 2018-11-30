import React from "react";
import ReactDOM from "react-dom";

export default class Kontakt extends React.Component {
  constructor(){
    super();
    this.state = {
      text : "",
      photoAdded: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.togglePhoto = this.togglePhoto.bind(this);
  }
  togglePhoto(event) {
      this.setState({ photoAdded: !this.state.photoAdded });
  }

  handleChange(event){
  this.setState({ text: event.target.value });
}
remainingCharacters() {
    if (this.state.photoAdded) {
      return 300 - 23 - this.state.text.length;
    } else {
      return 300 - this.state.text.length;
    }
  }
render() {
    console.log("contact");
    return (
      <div className="well clearfix">
        <input className="form-control" placeholder="Naslov"/>
        <br/>
        <textarea className="form-control" placeholder="Pitanje"
                  onChange={this.handleChange}>
        </textarea>
        <br/>
        <span>{this.remainingCharacters()}</span>
        <button className="btn btn-primary pull-right" 
                disabled={this.state.text.length === 0}>Objavi</button>
        <button className="btn btn-default pull-right" onClick={this.togglePhoto}>
          {this.state.photoAdded ? " ✓ Photo Added" : "Add Photo" }
        </button>
        <br/>
      </div>
    );
  }
}
