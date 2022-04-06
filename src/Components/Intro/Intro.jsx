import React from 'react'
import "./Intro.css"
import Baby from './babyyoda.gif'

const Intro = () => {
  return (
    <div className='intro'>
        <div className='text'>
            <p>Hello, My name is <span>Shagun</span>. <br/>I am an <span>UI/UX Designer</span>. </p>
        </div>
        <div className='image'>
            <img src={Baby} alt="helo" />
        </div>
    </div>
  )
}

export default Intro