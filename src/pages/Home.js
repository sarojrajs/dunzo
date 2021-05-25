import React, { useState } from 'react'
import HeroSection from '../components/HeroSection.js/HeroSection'
import Delivery from '../components/Delivery/Delivery';
import DownloadPage from '../components/DownloadPage/DownloadPage';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import TopPicks from '../components/TopPicks/TopPicks';
import SignIn from '../components/SignIn/SignIn';

function Home() {

    const [show,setShow]=useState(false)

    const handleClick=()=>{
        setShow(!show)
    }

    return (
        <div>
            {show && <SignIn click={handleClick}/>}
            <Header click={handleClick}/>
            <HeroSection/>
            <TopPicks/>
            <DownloadPage/>
            <Delivery/>
            <Footer/>
        </div>
    )
}

export default Home
