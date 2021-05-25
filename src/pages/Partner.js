import React from 'react'
import Advantage from '../components/AdvantageTable/Advantage'
import Banner from '../components/Banner/Banner'
import PartnerFooter from '../components/PartnerFooter/PartnerFooter'
import Posts from '../components/Posts/Posts'
import { advantage } from '../datas/advantage'
import { posts } from '../datas/posts'
import './Partner.css'
function Partner() {
    const data=advantage;
    const postsData=posts;
    return (
        <div>
            <Banner/>
            <div className='advantageTable'>
                {
                    data.map(item=>(
                        <Advantage img={item.img} title={item.title} desc={item.desc}/>
                    ))
                }
            </div>
            <div className='comments'>
                <h1>He said; She said</h1>
                <p>Hear from our delivery partners about their experience on Dunzo.</p>
            </div>
            <div className='postsComponent'>
                {
                    postsData.map(post=>(
                        <Posts desc={post.desc} name={post.name} city={post.name} url={post.url}/>
                    ))
                }
            </div>
            <PartnerFooter/>
        </div>
    )
}

export default Partner
