import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio";
import Language from "./Components/Language";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {},
      Translate: [],
    };
  }

  changeLanguage = (e) => {
    if (e.target.id === "ar") {
      this.getResumeData("/resumeDataAr.json");
      document.getElementById("fr").style.color = "white";
      document.getElementById("en").style.color = "white";
      e.target.style.color = "orange";
      document.querySelector(".App").classList.add("arabic");
      document.querySelector("#lang").classList.add("language");
      document.querySelector(".nav").classList.add("arabicFont");
    } else if (e.target.id === "en") {
      this.getResumeData("/resumeData.json");
      document.getElementById("fr").style.color = "white";
      document.getElementById("ar").style.color = "white";
      document.querySelector(".App").classList.remove("arabic");
      document.querySelector("#lang").classList.remove("language");
      document.querySelector(".nav").classList.remove("arabicFont");
      e.target.style.color = "orange";
    } else if (e.target.id === "fr") {
      this.getResumeData("/resumeDataFr.json");
      document.getElementById("ar").style.color = "white";
      document.getElementById("en").style.color = "white";
      document.querySelector(".App").classList.remove("arabic");
      document.querySelector("#lang").classList.remove("language");
      document.querySelector(".nav").classList.remove("arabicFont");
      e.target.style.color = "orange";
    }
    return true;
  };
  getResumeData(language) {
    this.setState({ resumeData: "", Translate: "" });
    $.ajax({
      url: language,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data, Translate: data.translate });
        console.log(this.state.Translate);
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.getResumeData("/resumeData.json");
    document.getElementById("en").style.color = "Orange";
    setTimeout(() => {
      document.querySelector(".Arrow").style.display = "none";
    }, 8000);
  }

  render() {
    return (
      <div className="App">
        <Header
          data={this.state.resumeData.main}
          translate={this.state.Translate[0]}
        />
        <Language
          changeLanguage={this.changeLanguage}
          translate={this.state.Translate[5]}
        />
        <About
          data={this.state.resumeData.main}
          translate={this.state.Translate[1]}
        />
        <Resume
          data={this.state.resumeData.resume}
          translate={this.state.Translate[2]}
        />
        <Portfolio
          data={this.state.resumeData.portfolio}
          translate={this.state.Translate[3]}
        />
        <Testimonials
          data={this.state.resumeData.testimonials}
          translate={this.state.Translate[6]}
        />
        <Contact
          data={this.state.resumeData.main}
          translate={this.state.Translate[4]}
        />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
