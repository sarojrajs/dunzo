import React from 'react'
import './HeroSection.css'
import { BsArrowRight} from "react-icons/bs";
import Card from './Card';
import SmallCard from './SmallCard';

function HeroSection() {
    return (
        <div className='heroSection'>
            <div className='top'>
                    <a href='/'>Home</a>
                    <BsArrowRight/>
                    <a href='/'>Bangalore</a>
            </div>
            <div className='heroSectionContainer'>
                <h1>Bangalore</h1>
                <p>Why step out when you can get everything delivered home with the tap of a button? Bangalore’s favourite delivery app gets you Food, Grocery, Medicine, Pet Supplies, Fruits & Vegetables, Meat & Fish, Health & Wellness, Gifts and Send Packages from one end of the city to the other. From your local kirana stores to your favourite brands, grocery shopping to your forgotten charger, we are always on the move for you. Why worry about your chores, when you can get it all Dun!</p>
                <div className='heroSectionCardContainers'>
                    <Card img='https://ik.imagekit.io/dunzo/home/tr:w-488,h-360_home_icon/operator-FFWUCfzmUzhok89HMYt0ON2Gy5oZECO73gRenPw11HxAeCLBtTBOG8FMqMTe92UOnScOPMUnjYDcaPVxx7wSFJwXJ3kSR3YRsPby4EgC4zW2mVYLc99zuvVh7O2Ppmx2QMQd40UiwYLGhy0OjbMayr.png'
                    title='grocery'
                    />

                    <Card img='https://ik.imagekit.io/dunzo/home/tr:w-488,h-360_home_icon/dunzo/icons/newHome/promoBanner/kitImageUrl/largeIcons/default_pnd_secondary2_1613527381240.png'
                    title='pickup'
                    />

                    <Card img='https://ik.imagekit.io/dunzo/home/tr:w-488,h-360_home_icon/operator-ABHxCyRo8CLcEMC0YE43zsmH2XHFv3xr6B8Y3tIdBpKE1NBAjyHS4vgJY3T3z8AEascTap9OETFY0CdvpHj70KZSGFNrCxkFVtUugsMRkyV5jVk9XHl164PCPop56VNkdpLhfymH86JkFjMlYYgQHK.jpg'
                    title='restaurants'
                    />

                    <Card img='https://ik.imagekit.io/dunzo/home/tr:w-488,h-360_home_icon/dunzo/icons/newHome/promoBanner/kitImageUrl/largeIcons/default_fnv_secondary2_1613527515094.png'
                    title='fruits-and-vegetables'
                    />
                </div>
                <div className='heroSectionSmallCard'>
                    <SmallCard 
                    img='https://ik.imagekit.io/dunzo/home/tr:w-80,h-80_home_icon/icons/R4_Icons/Home/default_meat_tertiary_grid_1609739765849.png'
                    title='Meat and Fish'
                    link='meat'
                    />
                    <SmallCard 
                    img='https://ik.imagekit.io/dunzo/home/tr:w-80,h-80_home_icon/icons/R4_Icons/Home/default_pets_tertiary_grid_1609739755734.png'
                    title='Pet Supplies'
                    link='pet'
                    />
                    <SmallCard 
                    img='https://ik.imagekit.io/dunzo/home/tr:w-80,h-80_home_icon/icons/R4_Icons/Home/paan_grid_1609739855940.png'
                    title='Paan'
                    live={true}
                    link='paan'
                    />
                    <SmallCard 
                    img='https://ik.imagekit.io/dunzo/home/tr:w-80,h-80_home_icon/icons/R4_Icons/Home/default_gifts_tertiary_grid_1613527886275.png'
                    title='Gifts and Lifestyle'
                    link='gift'
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
