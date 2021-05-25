import React from 'react'
import Card from './Card'
import './TopPicks.css'
function TopPicks() {
    return (
        <div className='topPicks'>
            <div className='topPicksTitle'>
                <h1>Top picks for you</h1>
                <div className='topPicksTitleUnderline'>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className='topPicksCard'>
                <Card img='https://ik.imagekit.io/dunzo/web-assets/images/d4b.jpg?tr=w-488,h-326,cm-pad_resize'/>
                <Card img='https://ik.imagekit.io/dunzo/web-assets/images/grocery.jpg?tr=w-488,h-326,cm-pad_resize'/>
                <Card img='https://ik.imagekit.io/dunzo/web-assets/images/restaurants.jpg?tr=w-488,h-326,cm-pad_resize'/>
                <Card img='https://ik.imagekit.io/dunzo/web-assets/images/send-packages.jpg?tr=w-488,h-326,cm-pad_resize'/>
            </div>
        </div>
    )
}

export default TopPicks
