import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Page.css'

export default function Navigations () {
    return (
        <div className='navigations-container'>
          <div className='links-container'>
              <p className='nav-link'> <Link to="/Portfolio" className="nav-link-text">&#60;
            <i class="fa-solid fa-house"></i>/&#62;</Link></p>
              <p className='nav-link'> <Link to="/About" className="nav-link-text">&#60;About
            <i class="fa-solid fa-user"></i>/&#62;</Link></p>
              <p className='nav-link'> <Link to="/Skills" className="nav-link-text">&#60;Skills
            <i class="fa-solid fa-list"></i>/&#62;</Link></p>
              <p className='nav-link'> <Link to="/Projects" className="nav-link-text">&#60;Projects
            <i class="fa-solid fa-folder-open"></i>/&#62;</Link></p>
              <p className='nav-link'> <Link to="/Contacts" className="nav-link-text">&#60;Contacts
            <i class="fa-solid fa-address-book"></i>/&#62;</Link></p>
          </div>
        </div>
    )
}
