import React, { Component } from "react";

export default class Language extends Component {
  render() {
    if (this.props.changeLanguage) {
      var changeLanguage = this.props.changeLanguage;
      var translate = this.props.translate;
    }

    return (
      <div id="lang">
        <p
          onClick={changeLanguage}
          className="multi__lang"
          title="English"
          id="en"
        >
          {translate && translate._en}
        </p>
        <p
          onClick={changeLanguage}
          className="multi__lang"
          title="Arabic"
          id="ar"
        >
          {translate && translate._ar}
        </p>
        <p
          onClick={changeLanguage}
          className="multi__lang"
          title="Frensh"
          id="fr"
        >
          {translate && translate._fr}
        </p>
      </div>
    );
  }
}
