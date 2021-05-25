import React from 'react'
import './DownloadPage.css'
function DownloadPage() {
    return (
        <div className='download'>
                <div className='downloadBackGround'></div>
                <div className='phoneImage'>
                    <img src='https://resources.dunzo.com/web-assets/prod/_next/static/images/dunzo-app-be5ce8c58d3ad0b183757f34179879b4.png' alt=''/>
                </div>
                <div className='downloadInfo'>
                    <h4>All this from the convenience of your phone.</h4>
                    <h4>Download the Dunzo mobile app.</h4>
                    <div className='downloadButtons'>
                        <img src='https://resources.dunzo.com/web-assets/prod/_next/static/images/playstore-fe053d8036d653fed3955cd2c2a1e7e2.svg' alt=''/>
                        <img src='https://resources.dunzo.com/web-assets/prod/_next/static/images/appstore-43cd8d3a00a6ed32c485951de9b3af63.svg' alt=''/>
                     </div>
                </div>
            </div>
    )
}

export default DownloadPage
