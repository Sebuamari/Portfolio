import React, { Component } from 'react'
import CV from "../CV/English.pdf"


export default class About extends Component {
  render() {
    return (
      <div className='info-container'>
        <p className='about'>
          <i class="fa-solid fa-circle-info"></i>  I'm an Exact and Natural Sciencies student at TSU  <i class="fa-solid fa-graduation-cap"></i><br/> 
          <i class="fa-solid fa-circle-info"></i>  But BitCamp got me interested in WEB-Development in 2021 December and I started learning it myself  <i class="fa-solid fa-code"></i> <br/>
          <i class="fa-solid fa-circle-info"></i>  I'm actively continuing to develop my skills with online resources  <br/>
          <i class="fa-solid fa-circle-info"></i>  Meanwhile I've worked on several projects  <i class="fa-solid fa-list-check"></i> <br/>
          <i class="fa-solid fa-circle-info"></i>  ReactJS has seriously piqued my interest and that is what I am currently deepening my knowledge in  <i class="fa-brands fa-react"></i><br/>
          <i class="fa-solid fa-circle-info"></i>  I'm planning to learn other Frameworks and mobile development too <br/>
        </p>
        <div className='download-container'>
          <button className='download-button'>
            <a href={CV} download="Mariam_Sebua_CV.pdf">
              DOWNLOAD MY CV
            </a>
          </button>
        </div>
      </div>
    )
  }
}
