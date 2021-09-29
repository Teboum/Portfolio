import React, { Component } from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      var city = this.props.data.address.city;
      var Translate = this.props.translate;
      console.log(Translate);
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <div>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#home" title="Hide navigation">
              Hide navigation
            </a>

            <ul id="nav" className={"nav",this.props.ar?"arabicFont":null}>
              <li className="current">
                <a className="smoothscroll smooth" href="#home">
                  {Translate && Translate._home}
                </a>
              </li>
              <li>
                <a className="smoothscroll smooth" href="#about">
                  {Translate && Translate._about}
                </a>
              </li>
              <li>
                <a className="smoothscroll smooth" href="#resume">
                  {Translate && Translate._resume}
                </a>
              </li>
              <li>
                <a className="smoothscroll smooth" href="#portfolio">
                  {Translate && Translate._works}
                </a>
              </li>
              <li>
                <a className="smoothscroll smooth" href="#testimonials">
                  {Translate && Translate._testimonials}
                </a>
              </li>
              <li>
                <a className="smoothscroll smooth" href="#contact">
                  {Translate && Translate._contact}
                </a>
              </li>
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">{name}.</h1>
              <h3 id="presentation">
                {Translate && Translate._am} {Translate && Translate._based}
                {city} <span className="transit">{occupation}</span>.{" "}
                {description}.
              </h3>
              <hr />
              <ul className="social">{networks}</ul>
            </div>
          </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle"></i>
            </a>
          </p>
        </header>
       
      </div>
    );
  }
}

export default Header;
