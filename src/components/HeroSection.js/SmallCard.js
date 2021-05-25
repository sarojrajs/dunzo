import React from 'react'
import { useHistory } from 'react-router'
import './SmallCard.css'
function SmallCard({img,title,live,link}) {
    const history=useHistory()
    return (
        <div className='smallCard' onClick={()=>{
            history.push(`/${link}`)
        }}>
            {live && <div className='live'>LIVE</div>}
            <img src={img} alt=''/>
            <p>{title}</p>
        </div>
    )
}

export default SmallCard
