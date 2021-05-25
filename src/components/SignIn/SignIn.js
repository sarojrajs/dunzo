import React, { useState } from 'react'
import './SignIn.css'
import { IoMdCall} from "react-icons/io";

function SignIn({click}) {

    const [active,setActive]=useState(false);

    return (
        <div className='signIn'>
            
            <div className='modal'>
            <div className='close' onClick={()=>{
                click()
            }} ><p>&times;</p></div>
                <img src='https://resources.dunzo.com/web-assets/prod/_next/static/images/signin-icon-cb6e6a706f01b84896e60235a2392ac9.png' alt=''/>
                <div className='signInInfo'>
                    <p>Sign in or Sign up</p>
                    <p>Get started with Dunzo</p>
                </div>
                <div className='input'>
                    <label><span style={{color:'red'}} >*</span>Enter your phone number</label>
                    <div className='phoneInput'>
                        <IoMdCall color='rgba(0,0,0,0.5)'/>
                        <p>+91</p>
                        <input type='text' placeholder='Mobile number'/>
                    </div>
                </div>
                <div className='tAndC'>
                    <input type="checkbox" id="vehicle1" onClick={()=>{
                        setActive(!active)
                    }}/>
                    <label forHtml="vehicle1">I accept the Terms and Conditions</label>
                    <a href="#">View T&C ></a>
                </div>
                <button className={active?'enabled':'disabled'}>Send OTP</button>
            </div>
        </div>
    )
}

export default SignIn
