import React from 'react'
import './Posts.css'
function Posts({desc,name,city,url}) {
    return (
        <div className='posts'>
            <div className='postsDesc'>
                <div className='quotes'><img src='https://www.dunzo.com/static/pages/assets/images/icons/quotes.png' alt=''/></div>
                <div className='postText'>
                    <p>{desc}</p>
                </div>
                <div className='quotes end'><img src='https://www.dunzo.com/static/pages/assets/images/icons/quotes.png' alt=''/></div>
            </div>
            <div className='userPosts'>
                <h3 className='userName'>{name}</h3>
                <p className='userCity'>{city}</p>
                <img src={url} alt=''/>
            </div>
        </div>
    )
}

export default Posts
