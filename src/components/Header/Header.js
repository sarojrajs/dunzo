import React, { useState } from 'react'
import './Header.css'
import { HiLocationMarker } from "react-icons/hi";
import { AiOutlineDown,AiOutlineMenu} from "react-icons/ai";
import { FiShoppingCart} from "react-icons/fi";
import { useHistory } from 'react-router';

function Header({click}) {
    const history=useHistory()
    const [show,setShow]=useState(false)
    return (
        <div style={{position:'sticky',top:'0',zIndex:'5'}}>
        <div className='header'>
            <div className='headerLeft'>
                <img src='https://resources.dunzo.com/web-assets/prod/_next/static/images/logo-4d2d81aefcf296bc100d9edc114c2ea5.png' alt='' onClick={()=>{
                    history.push("/")
                }}/>
                <div className='location'>
                    <HiLocationMarker/>
                    <p>Set Location</p>
                    <AiOutlineDown/>
                </div>
            </div>
            <div className='headerRightBackup' onClick={()=>{
                setShow(!show)
            }}>
                <AiOutlineMenu/>
            </div>
            <div className='headerRight'>
                <a href="/partner">Dunzo for Partners</a>      
                <a href="#">Need Delivery Partners?</a>
                <FiShoppingCart/>
                <button onClick={()=>{
                    click()
                }}>Sign In</button>
            </div>
        </div>
        {show &&
            <div className='dropDown'>
                
            <li>Get Location</li>
            <li><a href='/partner'>Dunzo for partners</a></li>
            <li><a href="#">Need Delivery Partners?</a></li>
            <li>Shopping Cart</li>
            <li onClick={()=>{
                click()
            }}>Sign In</li>
        
</div>
        }
        
        </div>
    )
}

export default Header
