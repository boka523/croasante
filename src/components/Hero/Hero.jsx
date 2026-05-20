import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>a bakery, but an extraordinary one...</h1>
            <p>handcrafted in-house, pure sourdough and freshly milled flour - made to perfection of every bite</p>
        </div>
    </div>
  )
}

export default Hero