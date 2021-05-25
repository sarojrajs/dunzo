import React from 'react'
import './Advantage.css'
function Advantage({img,title,desc}) {
    return (
        <div className='advantage'>
            <div className='advantageLeft' >
                <img src={img}alt=''/>
            </div>
            <div className='advantageRight'>
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>

        </div>
    )
}

export default Advantage 
