import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, atque. Minus quasi fuga suscipit aut, aspernatur eos beatae optio expedita ipsum explicabo eaque? Tempore, blanditiis ducimus animi aut rem molestias.
                </p>
                <div className="footer-social-icons">
                   <img src={assets.facebook_icon} alt="" />
                   <img src={assets.twitter_icon} alt="" />
                   <img src={assets.linkedin_icon} alt="" /> 
                </div>
            </div>
            
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>PrivacyPolicy</li>
                </ul>
            </div>

            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 78945 67890</li>
                    <li>contanct@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>© 2026 FoodDel. All rights reserved.
</p>
    </div>
  )
}

export default Footer
