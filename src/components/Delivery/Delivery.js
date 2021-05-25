import React from 'react'

import { areas } from '../../datas/data'
import './Delivery.css'
function Delivery() {

    const datas=areas;
    return (
        <div className='delivery'>
            <div className='title'>
                <h1>Areas we deliver to</h1>
            </div>
            <div className='areas'>
                {
                    datas.map(data=>(
                        <p>{data}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default Delivery
