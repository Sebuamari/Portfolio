import React from 'react'
import { useState, useEffect } from 'react'
import '../styles/Page.css'

export default function Timer() {
    let [second, setSecond] = useState(14);

    useEffect( () => { 
        setTimeout ( () => {
            setSecond ( () => second - 1);
        }, 1000)
    })

  return (
    <div className='timer-container'>
        <h1 className='timer'>Redirecting to navigation page in {second} seconds</h1>
        <i class="fa-solid fa-hourglass-end clock"></i>
    </div>
  )
}
