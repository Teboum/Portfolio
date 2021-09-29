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
      en:true,
      ar:false,
      fr:false
   };
  }
  
  changeLanguage = (e) => {
    console.log(e.target,"check");
    console.log(this.state,'state');
    if (e.target.id === "ar") {
      this.setState({ar:true,en:false,fr:false},()=>{
        this.getResumeData("/resumeDataAr.json");
      })
   } else if (e.target.id === "en") {
      this.setState({en:true,ar:false,fr:false},()=>{
        this.getResumeData("/resumeData.json");
      })
   } else if (e.target.id === "fr") {
      this.setState({fr:true,ar:false,en:false},()=>{
        this.getResumeData("/resumeDataFr.json");
      })

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
      }.bind(this),
      error: function (xhr, status, err) {
       alert(err);
      },
    });
  }

  componentDidMount() {
    
    this.getResumeData("/resumeData.json");
    
  }

  render() {
    return (
      <div className={"App",this.state.ar?"arabic":""}>
        <Header
          data={this.state.resumeData.main}
          translate={this.state.Translate[0]}
          ar={this.state.ar}
          
        />
        <Language
          changeLanguage={this.changeLanguage}
          en={this.state.en}
          ar={this.state.ar}
          fr={this.state.fr}
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
