import React, { Component } from 'react'
import Project from '../components/Project'
import Casino from "../images/casino.png"
import Shop from "../images/Scandiweb Store/1.png"
import Weather from "../images/weather.png"
import redberry from "../images/redberry.png"
import { Link } from 'react-router-dom'

export default class Projects extends Component {
  render() {
    return (
      <div className='projects-container'>
        <h1>Take a look at my projects</h1>
        <Project images={Casino} madeWidth="HTML, CSS, JS, API"
        description="A Casino Page"
        linkRepo="https://github.com/Sebuamari/Casino-Page.git"
        linkLive="https://sebuamari.github.io/Casino-Page/"/>
        <Project images={Shop} madeWidth="ReactJS, Redux, CSS, GraphQL, APOLLO CLIENT"
        description="Online Shop"
        linkRepo="https://github.com/Sebuamari/Store.git"
        linkLive="https://sebuamari.github.io/Store/"/>
        <Project images={Weather} madeWidth="HTML, CSS, JS, API"
        description="A Weather App"
        linkRepo="https://github.com/Sebuamari/Weather-App.git"
        linkLive="https://sebuamari.github.io/Weather-App/"/>
        <Project images={redberry} madeWidth="ReactJS, Redux, CSS, , API"
        description="Online Form"
        linkRepo="https://github.com/Sebuamari/redberry-bootcamp-assignment.git"
        linkLive=""/>
        <button><Link className='see-more' to="/Projects">SEE MORE...</Link></button>
      </div>
    )
  }
}
