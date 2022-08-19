import React, { Component } from 'react'

export default class Contacts extends Component {
  render() {
    return (
      <div className='contacts-container'>
        <h1><i class="fa-solid fa-location-dot"></i> I'm currently available remotely or on-site in Tbilisi, Georgia</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64600.61354125369!2d44.77577713832029!3d41.75375916692386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd7e64f626b%3A0x61d084ede2576ea3!2sTbilisi!5e1!3m2!1sen!2sge!4v1660836496211!5m2!1sen!2sge" width="450" height="300" style={{"border":0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>    
        <h2>I'm open to any interesting offers <br/> Don't hesitate to reach me out</h2>
        <div className='contacts-list'>
              <p className='nav-link'><a href={'//www.linkedin.com/in/sebuamariam'} target="_blank"><i class="fa-brands fa-linkedin fa-2x"></i></a></p>
              <p className='nav-link'><a href={'https://github.com/Sebuamari'} target="_blank"><i class="fa-brands fa-github fa-2x"></i></a></p>
              <p className='nav-link'><a href="mailto:sebuamari@gmail.com"><i class="fa-solid fa-envelope fa-2x"></i></a></p>
              <p className='nav-link'><a href="tel:+995599176788"><i class="fa-solid fa-phone fa-2x"></i></a></p>
        </div>
      </div>
    )
  }
}
