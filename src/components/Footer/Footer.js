import React from 'react'
import './Footer.css'
import { footerData } from '../../datas/data'

function Footer() {
    const datas=footerData;

    return (
        <div className='footer'>
            <div className='footerTop'>
                <p>You can’t stop time, but you can save it!</p>
                <p>Living in the city, there is never enough time to shop for groceries, pick-up supplies, grab food and wade through traffic on the way back home. How about we take care of all of the above for you? What if we can give you all that time back? Send packages across the city and get everything from food, groceries, medicines and pet supplies delivered right to your doorstep. From any store to your door, just make a list and we’ll make it disappear. Just Dunzo It!</p>
            </div>
            <hr/>
            <div className='footerBottom'>
                <div className='image'>
                    <img src='https://resources.dunzo.com/web-assets/prod/_next/static/images/logo-footer-a7423f59ce95bf41719960ee8314ff2d.png' alt=''/>
                </div>
                {
                    datas.map(data=>(
                        <div className='columns'>
                            <h4>{data.title}</h4>
                            {
                                data.arrays.map(item=>(
                                    <p>{item}</p>
                                ))
                            }
                        </div>
                    ))
                }
                <div className='scooterImage'>
                    <img src='https://resources.dunzo.com/web-assets/prod/_next/static/images/footer-mascot-37512998a23e1abed75aa6c883d8f0a1.png' alt=''/>
                </div>
            </div>
        </div>
    )
}

export default Footer
