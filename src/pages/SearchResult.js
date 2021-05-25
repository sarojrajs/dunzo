import React, { useEffect, useState } from 'react'
import './SearchResult.css'
import { useParams } from 'react-router'
import Header from '../components/Header/Header'
import SignIn from '../components/SignIn/SignIn'
import { BsArrowRight} from "react-icons/bs";
import { gift, grocery, meat, paan, pet, restaurants, vegetables } from '../datas/search';
import Spinner from 'react-spinkit'
import CardComponent from '../components/SearchPage/CardComponent'
import Footer from '../components/Footer/Footer'

function SearchResult() {

    const [show,setShow]=useState(false)
    let{category}=useParams()
    const handleClick=()=>{
        setShow(!show)
    }
    const [data,setData]=useState(null);

    useEffect(()=>{
        if(category==='grocery'){
            setData(grocery)
        }
        if(category==='restaurants'){
            setData(restaurants)
        }
        if(category==='fruits-and-vegetables'){
            setData(vegetables)
        }
        if(category==='meat'){
            setData(meat)
        }
        if(category==='pet'){
            setData(pet)
        }
        if(category==='paan'){
            setData(paan)
        }
        if(category==='gift'){
            setData(gift)
        }
    },[category])

    if(data){

    return (
        <div>
            {show && <SignIn click={handleClick}/>}
            <Header click={handleClick}/>
            <div className='intro'>
                <div className='introTop'>
                    <a href='/'>Home</a>
                    <BsArrowRight/>
                    <a href='/'>Bangalore</a>
                    <BsArrowRight/>
                    <a href={`/${category}`}>{data.title}</a>
                </div>
                <div className='category'>
                    <div className='categoryImage'>
                    <img src={data.img} alt=''/>
                    </div>
                    <div className='categoryDetails'>
                        <h1>{data.title}</h1>
                        <p>{data.stores} Stores</p>
                    </div>
                </div>
            </div>
            <div className='searchResult'>
                {
                    data.shops.map((shop)=>{
                       return <CardComponent img={shop.imgUrl} area={shop.area} distance={shop.distance} name={shop.name}/>
                    })
                }
            </div>
            <Footer/>
        </div>
    )
    }
    else{
        return (
            <div className='loader'>
                <Spinner name="circle" className='spinner'/>
            </div>
        )
    }
}

export default SearchResult
