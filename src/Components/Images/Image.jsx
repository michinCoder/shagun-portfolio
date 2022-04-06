import React from 'react'
import './Image.css'
import Img1 from './Image/IMG_4444.jpg'
import Img2 from './Image/IMG_4343.jpg'
import Img3 from './Image/IMG_4001.jpg'
import Img4 from './Image/IMG_4002.jpg'
import Img5 from './Image/IMG_4003.jpg'
import Img6 from './Image/IMG_4006.jpg'
import Img7 from './Image/IMG_4008.jpg'
import Img8 from './Image/IMG_4259.jpg'

const Image = () => {
  return (
    <div className='box'>
    <div className="row"> 
      <div className="column">
        <img src={Img1} style={{width: "100%"}}/>        
        <img src={Img8} style={{width: "100%"}}/>
      </div> 
      <div className="column">
        <img src={Img3} style={{width: "100%"}}/>        
        <img src={Img4} style={{width: "100%"}}/>
      </div>        
      <div className="column">
        <img src={Img5} style={{width: "100%"}}/>        
        <img src={Img6} style={{width: "100%"}}/>
      </div>  
      <div className="column">
        <img src={Img7} style={{width: "100%"}}/>        
        <img src={Img2} style={{width: "100%"}}/>
      </div> 
    </div>
    </div>
  )
}

export default Image