import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Page.css'

export default function Contactsmini () {
    return (
        <div className='navigations-container'>
          <div className='links-container contacts-mini'>
              <p className='nav-link'><a href={'//www.linkedin.com/in/sebuamariam'} target="_blank"><i class="fa-brands fa-linkedin"></i></a></p>
              <p className='nav-link'><a href={'https://github.com/Sebuamari'} target="_blank"><i class="fa-brands fa-github"></i></a></p>
              <p className='nav-link'><a href="mailto:sebuamari@gmail.com"><i class="fa-solid fa-envelope"></i></a></p>
              <p className='nav-link'><a href="tel:+995599176788"><i class="fa-solid fa-phone"></i></a></p>
          </div>
        </div>
    )
}
