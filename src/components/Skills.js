import React, { Component } from 'react'

export default class Skills extends Component {
  render() {
    return (
      <div className='skills-container'>
        <div className='skillset'>
          <p className='skills-header'> I understand basics of:</p>
          <p className='skills'>
            <i class="fa-light fa-circle-small"></i> BOOTSTRAP <i class="fa-brands fa-bootstrap"></i> <br/>
            <i class="fa-light fa-circle-small"></i> SASS <i class="fa-brands fa-sass"></i> <br/>
            <i class="fa-light fa-circle-small"></i> jQuery <br/>
            <i class="fa-light fa-circle-small"></i> GRAPHQL <br/>
            <i class="fa-light fa-circle-small"></i> APOLLO CLIENT <br/>
          </p>
        </div>
        <div className='skillset'>
          <p className='skills-header'> I am more confident with:</p>
          <p className='skills'>
            <i class="fa-light fa-circle-small"></i> HTML <i class="fa-brands fa-html5"></i> <br/>
            <i class="fa-light fa-circle-small"></i> CSS <i class="fa-brands fa-css3-alt"></i> <br/>
            <i class="fa-light fa-circle-small"></i> JavaScript <i class="fa-brands fa-js"></i> <br/>
            <i class="fa-light fa-circle-small"></i> ReactJS <i class="fa-brands fa-react"></i> <br/>
            <i class="fa-light fa-circle-small"></i> Redux <br/>
            <i class="fa-light fa-circle-small"></i> API <br/>
            <i class="fa-light fa-circle-small"></i> RESPONSIVE WEB DESIGN <br/>
          </p>
        </div>
      </div>
    )
  }
}
