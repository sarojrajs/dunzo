import React from 'react'
import { useHistory } from 'react-router'
import './Card.css'
function Card({img,title}) {
    const history=useHistory()
    return (
        <div className='card' onClick={()=>{
            history.push(`/${title}`)
        }} >
            <img src={img} alt=''/>
        </div>
    )
}

export default Card
