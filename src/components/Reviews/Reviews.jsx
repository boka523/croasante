import React, { useRef } from 'react'
import './Reviews.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'



const Reviews = () => {

    const slider = useRef(); 
    let tx = 0;

    const slideForward = () => {
        if(tx > -50){ 
            tx-=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = () => {
        if(tx < 0){ 
            tx+=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

  return (
    <div className='reviews'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>emily williams</h3>
                            </div>
                        </div>
                        <p>the sourdough country loaf from croasante is honestly the best bread i’ve ever tasted. the crust is perfectly crisp, the inside is soft and full of flavour and you can really tell everything is made with patience and care.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>william jackson</h3>
                            </div>
                        </div>
                        <p>i keep coming back for the almond croissant because nothing else compares to it. it’s buttery, perfectly layered and just sweet enough without being too heavy. croasante completely changed my standards for pastries.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>samantha cooper</h3>
                            </div>
                        </div>
                        <p>the chocolate pain suisse is my absolute favourite. every bite tastes fresh, rich and incredibly balanced. you can feel the artisan quality in everything croasante makes.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>john davis</h3>
                            </div>
                        </div>
                        <p>their slow-fermented sourdough baguette is unreal. the texture, aroma and flavour are exactly what you expect from a true artisan bakery. croasante really sets a new benchmark for baked goods.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Reviews