import React, { useRef } from 'react'
import './AllPhotos.css'
import picture1 from '../../assets/picture1.jpg'
import picture2 from '../../assets/picture2.jpg'
import picture3 from '../../assets/picture3.jpg'
import picture4 from '../../assets/picture4.jpg'
import picture5 from '../../assets/picture5.jpg'
import picture6 from '../../assets/picture6.jpg'
import picture7 from '../../assets/picture7.jpg'
import picture8 from '../../assets/picture8.jpg'
import picture9 from '../../assets/picture9.jpg'
import picture10 from '../../assets/picture10.jpg'
import picture11 from '../../assets/picture11.jpg'
import picture12 from '../../assets/picture12.jpg'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'

const AllPhotos = () => {

  const totalImages = 12
  const visibleImages = 3
  const step = 100 / totalImages
  const maxTx = -step * (totalImages - visibleImages)

  const move = useRef(); 
  let tx = 0;
  
  const slideForwards = () => {
    if(tx > maxTx){ 
      tx-=step;
      }
      move.current.style.transform = `translateX(${tx}%)`
  }
  const slideBackwards = () => {
    if(tx < (75+maxTx)){ 
      tx+=step;
      }
      move.current.style.transform = `translateX(${tx}%)`
  }

  return (
    <div className='allphotos'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForwards}/>
      <img src={back_icon} alt="" className='back-btn'onClick={slideBackwards}/>
      <div className='photos_title'>
        <h1>dive deep into our bakery</h1>
        <h3>so irresistible it should be illegal...</h3>
      </div>
      <div className='slideshow'>
        <ul ref={move}>
          {[picture1, picture2, picture3, picture4, picture5, picture6,
            picture7, picture8, picture9, picture10, picture11, picture12]
            .map((pic, index) => (

            <li key={index}>
              <div className='picture'>
                <img src={pic} alt="" />
              </div>
            </li>

          ))}
        </ul>
      </div>
    </div>
  )
}

export default AllPhotos