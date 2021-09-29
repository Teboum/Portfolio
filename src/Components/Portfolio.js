import React, { Component } from "react";
import Project from "./Project";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
    openProject:false,
    project:null,
    index:0,
  
    
   };
  }
  
  openProjectFct=(index)=>{
    console.log(index);
    this.setState({openProject:true,index:index})
    
  }
  closeProject=()=>{
    this.setState({openProject:false})
  }
  slideShow=(n)=>{
    console.log(this.props.data.projects[this.state.index],this.state.index,this.state.data,"index",n);
    if(this.state.index===0&&n===-1){
      this.setState({index:this.props.data.projects.length-1})
   }
   else if(this.state.index===this.props.data.projects.length-1&&n===1){
    this.setState({index:0})
  }
    else {
      this.setState((prevState)=>{return{...prevState,index:prevState.index+n}})
    }
  }

  render() {
    if (this.props.data) {
     
      var Translate = this.props.translate;
      
      var projects = this.props.data.projects.map((project,index)=> { 
     
        var projectImage = "images/portfolio/" + project.image;
   
        return (
          <div key={project.title} className="columns portfolio-item" onClick={e=>this.openProjectFct(index)}>
            <div className="item-wrap">
            <a  title={project.title}>
                <img alt={project.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{project.title}</h5>
                    <p>{project.category}</p>
                  </div>
                </div>
                <div className="link-icon">
                  <i className="fa fa-link"></i>
                </div>
              </a>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="portfolio" className={this.state.openProject?"project__oppened":null}>
        {this.state.openProject?
        <Project setOpenProject={this.closeProject}
          openProject={this.state.openProject}
          projects={this.props.data.projects}
          slideShow={this.slideShow}
          index={this.state.index}/>
      
     
      :  <div className="row">
      <div className="twelve columns collapsed">
        <h1>{Translate && Translate._check}</h1>

        <div
          id="portfolio-wrapper"
          className="bgrid-quarters s-bgrid-thirds cf"
        >
          {projects}
        </div>
      </div>
    </div>}
        
      </section>
    );
  }
}

export default Portfolio;
