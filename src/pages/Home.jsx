import React, { useState } from 'react'
import Navbar from '../components/navbar/navbar'
import Hero from '../components/Hero/Hero'
import Products from '../components/Products/Products'
import Title from '../components/Title/Title'
import About from '../components/About/About'
import Gallery from '../components/Gallery/Gallery'
import Reviews from '../components/Reviews/Reviews'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import VideoPlayer from '../components/VideoPlayer/VideoPlayer'

const Home = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='With love, from us' title='what do we offer?'/>
        <Products />
        <About setPlayState={setPlayState}/>
        <Title subTitle='gallery' title='photos so good you’ll drool'/>
        <Gallery/>
        <Title subTitle='hey, real people said this' title='honest reviews'/>
        <Reviews/>
        <Title subTitle='Contact us' title='get in touch'/>
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default Home