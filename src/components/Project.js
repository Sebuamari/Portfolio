import React, { Component } from 'react'

export default class Project extends Component {
  render() {
    return (
      <div className='project-container'>
        <div className='project-image'>
          <img src={this.props.images} alt="project visual"></img>
        </div>
        <div className='project-data'>
          <p>{this.props.description} made with: <br/> {this.props.madeWidth}</p>
          <div className='project-links'>
            { this.props.linkRepo !== "" ? <a href={this.props.linkRepo} target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i> View GitHub Repo</a> : "" }
            { this.props.linkLive !== "" ? <a href={this.props.linkLive} target="_blank" rel="noreferrer"><i class="fa-solid fa-laptop-code"></i> View Deployment</a> : "" }
          </div>
        </div>
      </div>
    )
  }
}
