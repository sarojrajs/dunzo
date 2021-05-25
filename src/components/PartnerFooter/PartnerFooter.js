import React from 'react'
import Icon from './Icon'
import './PartnerFoooter.css'
import { BiEnvelope } from "react-icons/bi";
import { FaFacebookF,FaTwitter } from "react-icons/fa";
function PartnerFooter() {
    return (
        <div className='partnerFooter'>
            <div className='partnerFooterContainer'>
                <div className='image'>
                    <img src='https://www.dunzo.com/static/pages/assets/images/logo-compact.png' alt=''/>
                </div>
                <div className='links'>
                    <ul>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Jobs</a></li>
                        <li><a href='#'>Contact</a></li>
                        <li><a href='#'>Terms & Conditions</a></li>
                        <li><a href='#'>Privacy Policy</a></li>
                    </ul>
                    <div className='icons'>
                        <Icon Icon={<BiEnvelope/>}/>
                        <Icon Icon={<FaFacebookF/>}/>
                        <Icon Icon={<FaTwitter/>}/>
                    </div>
                </div>
            </div>
            <img className='bikeImage' src='https://www.dunzo.com/static/pages/assets/images/scooter.png' alt=''/>

        </div>
    )
}

export default PartnerFooter
