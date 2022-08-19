import React, { Component } from 'react'

export default class Project extends Component {
  render() {
    return (
      <div className='project-container'>
        {/* <iframe src="https://sebuamari.github.io/Casino-Page/" width="100px" height="50px">
    </iframe> */}
        <div className='project-image'>
          <img src={this.props.images}></img>
        </div>
        <div className='project-data'>
          <p>{this.props.description} made with: <br/> {this.props.madeWidth}</p>
          <div className='project-links'>
            { this.props.linkRepo !== "" ? <a href={this.props.linkRepo} target="_blank"><i class="fa-brands fa-github"></i> View GitHub Repo</a> : "" }
            <a href={this.props.linkLive} target="_blank"><i class="fa-solid fa-laptop-code"></i> View Deployment </a>
          </div>
        </div>
      </div>
    )
  }
}
