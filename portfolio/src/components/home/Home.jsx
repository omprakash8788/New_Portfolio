import React from 'react'
import './Home.css'
import img from './image/imag.png'
const Home = () => {
  return (
    <div className='home'>
           <div class="header-content">
            <h1>
                <span>Omprakash</span>
                <br />
                <span>Kumar</span>
              </h1>
              <div class="btn-container">
                <button class="btn-dark">
                  Request call back <img src="images/phone.png" alt="" />
                </button>
                <button class="btn-light">
                  Know more <img src="images/arrow-black.png" alt="" />
                </button>
              </div>
              <p>Passionate ReactJS developer with one year of experience.</p>
        </div>
      <div className='left'>
        <img src={img} alt="" />
      </div>
    </div>
  )
}

export default Home