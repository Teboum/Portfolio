import React from 'react'

function Project({setOpenProject,openProject,projects,slideShow,index}) {
    var project =projects[index]

    return (
        <div className="project">
            <p className="flesh flesh2" onClick={e=>slideShow(1)}>&#10095;</p>
          <p onClick={setOpenProject} className="close__project">&#9746;</p>  
          <img className="descriptio__img" src="images/img_girl.png" alt="Girl in a jacket" />
          <p className="description__project">
            <h2 className="title__project">Project Bref dynamique title</h2 >
            <h3><a href="">{project.url}</a></h3>
            <ul className="description__list">
              <li className="description__text">
               <p className="description__detail"> aaaaa</p>
              </li>
              <li className="description__text">
              
               <p> aaaaa</p>
              </li>
              <li className="description__text">
              
              <p> aaaaa</p>
              </li>
              <li className="description__text">
              
              <p> aaaaa</p>
              </li>
              <li className="description__text">
              <p> aaaaa</p>
              </li>
            </ul>
         
           
          </p>
          <p className="flesh"  onClick={e=>slideShow(-1)}> &#10094;</p>
        </div>
    )
}

export default Project
