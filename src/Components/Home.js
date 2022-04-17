import '../App.css';
import React from 'react'
import pic1 from '../Card Images/19-02.jpeg'
import pic2 from '../Card Images/1911 Revolution.jpeg'
import pic3 from '../Card Images/AreaQ.jpeg'
import pic4 from '../Card Images/Christmas Story.jpeg'
import pic5 from '../Card Images/Einstein.jpeg'
import pic6 from '../Card Images/Fighter.jpeg'
import pic7 from '../Card Images/FirstDog.jpeg'
import pic8 from '../Card Images/Hells gate.jpeg'
import pic9 from '../Card Images/Medici.jpeg'
import pic10 from '../Card Images/Modus.jpeg'
import pic11 from '../Card Images/Picnic.jpeg'
import pic12 from '../Card Images/Wolf Creek.jpeg'
//import { useState } from 'react'


export default function Home() {
  return (
    <div className="login_area">
      <div className='movies'>
        <div className='category'>
          <div>
            <h4 className='list_name'>Family</h4>
          </div>
          <div className='list_items'>
              <div className='list_content'>
                <img className='img' src={pic1} alt=""></img>
              </div>
              <div className='list_content'>
                <img className='img' src={pic2} alt=""></img>
              </div>
              <div className='list_content'>
                <img className='img' src={pic12} alt=""></img>
              </div>
              <div className='list_content'>
                <img className='img' src={pic4} alt=""></img>
              </div>
              <div className='list_content'>
                <img className='img' src={pic5} alt=""></img>
              </div>
          </div>
        </div>
        <div className='category'>
          <div>
            <h4 className='list_name'>Film</h4>
          </div>
          <div className='list_items'>
              <div className='list_content'>
                <img className='img' src={pic6} alt=""></img>
              </div>
              <div className='list_content'>
                <img className='img' src={pic9} alt=""></img>
              </div>
              <div className='list_content'>
                <img className='img' src={pic8} alt=""></img>
              </div>
              <div className='list_content'>
                <img className='img' src={pic1} alt=""></img>
              </div>
              <div className='list_content'>
                <img className='img' src={pic10} alt=""></img>
              </div>
          </div>
        </div>
        <div className='category'>
          <div>
            <h4 className='list_name'>Action</h4>
          </div>
          <div className='list_items'>
              <div className='list_content'>
                <img className='img' src={pic11} alt=""></img>
              </div>
              <div className='list_content'>
                <img className='img' src={pic5} alt=""></img>
              </div>
              <div className='list_content'>
                <img className='img' src={pic10} alt=""></img>
              </div>
              <div className='list_content'>
                <img className='img' src={pic2} alt=""></img>
              </div>
              <div className='list_content'>
                <img className='img' src={pic9} alt=""></img>
              </div>
          </div>
        </div>
        <div className='category'>
          <div>
            <h4 className='list_name'>Adventure</h4>
            <div className='list_items'>
              <div className='list_content'>
                <img className='img' src={pic10} alt=""></img>
              </div>
              <div className='list_content'>
                <img className='img' src={pic2} alt=""></img>
              </div>
              <div className='list_content'>
                <img className='img' src={pic12} alt=""></img>
              </div>
              <div className='list_content'>
                <img className='img' src={pic1} alt=""></img>
              </div>
              <div className='list_content'>
                <img className='img' src={pic11} alt=""></img>
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
