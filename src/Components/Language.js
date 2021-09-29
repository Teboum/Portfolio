import React, { Component } from "react";

export default class Language extends Component {
  render() {

    if (this.props.changeLanguage) {
     
      var translate = this.props.translate;
    }
console.log(this.props)
    return (
      <div id="lang" className={this.props.ar?"language":null}>
        <p
          onClick={this.props.changeLanguage}
          className={`multi__lang ${this.props.en?"orange":null}`}
          title="English"
          id="en"
          
        >
          {translate && translate._en}
        </p>
        <p
          onClick={this.props.changeLanguage}
          className={`multi__lang ${this.props.ar?"orange":null}`}
          title="Arabic"
          id="ar"
          
        >
          {translate && translate._ar}
        </p>
        <p
          onClick={this.props.changeLanguage}
          className={`multi__lang ${this.props.fr?"orange":null}`}
          title="Frensh"
          id="fr"
        >
          {translate && translate._fr}
        </p>
      </div>
    );
  }
}
