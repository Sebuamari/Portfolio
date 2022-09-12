import React, { Component } from 'react'
import Project from '../components/Project'
import Casino from "../images/casino.png"
import Shop from "../images/Scandiweb Store/1.png"
import Weather from "../images/weather.png"
import Slider from "../images/slider.png"
import Search from "../images/search.png"
import Travel from "../images/travel.png"
import redberry from "../images/redberry.png"
import Clock from "../images/clock.png"
import Calculator from "../images/calculator.png"
import Machine from "../images/machine.png"
import Quote from "../images/quote.png"


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
        <Project images={Slider} madeWidth="HTML, CSS, JS"
        description="Image Slider"
        linkRepo="https://github.com/Sebuamari/Image-Slider.git"
        linkLive="https://sebuamari.github.io/Image-Slider/"/>
        <Project images={Search} madeWidth="ReactJS, CSS, API"
        description="Autocomplete Search"
        linkRepo="https://github.com/Sebuamari/AutoComplete-Search.git"
        linkLive="https://sebuamari.github.io/AutoComplete-Search/"/>
        <Project images={Travel} madeWidth="HTML, CSS, JS, API"
        description="Travel Page"
        linkRepo="https://github.com/Sebuamari/UnilabTask.git"
        linkLive="https://sebuamari.github.io/UnilabTask/"/>
        <Project images={Clock} madeWidth="ReactJS, CSS"
        description="25 + 5 Clock"
        linkRepo=""
        linkLive="https://codepen.io/sebuamari/pen/VwyRVQm"/>
        <Project images={Calculator} madeWidth="ReactJS, CSS"
        description="JavaScript Calculator"
        linkRepo=""
        linkLive="https://codepen.io/sebuamari/pen/WNdLNEB"/>
        <Project images={Machine} madeWidth="ReactJS, CSS"
        description="Drum Machine"
        linkRepo=""
        linkLive="https://codepen.io/sebuamari/pen/vYprajN"/>
        <Project images={Quote} madeWidth="HTML, CSS, JS, jquery"
        description="Random Quote Machine"
        linkRepo=""
        linkLive="https://codepen.io/sebuamari/pen/JjOpMXd"/>
      </div>
    )
  }
}
