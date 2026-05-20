import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className='about-left'>
          <img src={about_img} alt="" className='about-img'/>
          <img src={play_icon} alt="" className='play-icon' onClick={() => {setPlayState(true)}}/>
        </div>
        <div className='about-right'>
          <h3>about croasante</h3>
          <h2>changing the way you look at bakeries</h2>
          <p>at croasante, we believe artisan baking is more than a craft — it is a daily dedication to quality, patience and authentic flavour. every loaf and pastry is made in-house using carefully selected ingredients, traditional techniques and naturally fermented sourdough that brings depth, texture and character to every bite.</p>
          <p>our bakery was created to redefine what people expect from modern bakeries. from slow-fermented breads to perfectly layered croissants and handcrafted pastries, every product is designed to deliver a balance of simplicity, elegance and exceptional taste. we focus on small-batch production to ensure consistency, freshness and uncompromising quality throughout the day.</p>
          <p>croasante represents a new standard for artisan bakeries — where craftsmanship meets innovation and where every detail matters. by combining traditional sourdough methods with a modern approach to baking, we create products that feel timeless, refined and unforgettable for every customer who walks through our doors.</p>
        </div>
    </div>
  )
}

export default About