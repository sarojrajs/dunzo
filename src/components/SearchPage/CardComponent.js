import React from 'react'
import './CardComponent.css'
function CardComponent({img,area,distance,name}) {
    return (
        <div className='cardComponent'>
            <div className='storeImage'>
                <img src={img} alt=''/>
            </div>
            <div className='storeDetails'>
                <p className='storeName'>{name}</p>
                <p className='storeArea'>{area}</p>
                <p className='storeDistance'>{distance} Km</p>
            </div>
        </div>
    )
}

export default CardComponent
