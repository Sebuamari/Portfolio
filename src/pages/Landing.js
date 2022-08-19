import React from 'react'
import About from '../components/About';
import Contacts from '../components/Contacts';
import Projectsmini from '../components/Projectsmini'
import Skills from '../components/Skills';
import '../styles/Page.css'

function Landing () {

    return (
      <div className='landing-container'>
        <h1 className='hello'> Hello <i class="fa-solid fa-hand waving"></i></h1>
        <h2 className='me'>I'm Mariam Sebua <br/> Junior Web Developer <br/> Can I help you in digital world?</h2>
        <About/>
        <Skills/>
        <Projectsmini/>
        <Contacts/>
      </div>
    );
}

export default Landing;