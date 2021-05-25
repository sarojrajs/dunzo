import React from 'react'
import './Banner.css'
function Banner() {
    return (
        <div className='banner'>
            <div className='bannerLeft'>
                <img src='https://www.dunzo.com/static/pages/assets/images/logo.png' alt=''/>
                <h1 className='heading'>Become a delivery superhero and start earning</h1>
                <div className='divider'>
                    <span></span>
                    <span></span>
                </div>
                <p>With Dunzo, you can have flexible working hours and help us make deliveries in your city.</p>
                <button>BECOME A DUNZO PARTNER</button>
            </div>
            <div className='bannerRight'>
                <img src='https://www.dunzo.com/static/pages/assets/images/people/partner-banner.png' alt=''/>
            </div>
        </div>
    )
}

export default Banner
