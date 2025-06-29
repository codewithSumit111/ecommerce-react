import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src="src/assets/logo.webp" alt="" height="40px" />
            <p>Shopify</p>
        </div>
        <ul className='footer-links'>
            <li>About</li>
            <li>Products</li>
            <li>Offices</li>
            <li>Company</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-container">
                <img src="src/assets/instagram.png" alt="instagram" height="30px" />
            </div>
            <div className="footer-icon-container">
                <img src="src/assets/facebook.png" alt="facebook" height="30px" />
            </div>
            <div className="footer-icon-container">
                <img src="src/assets/whatsapp.png" alt="whatsapp" height="30px" />
            </div>
        </div>
        <div className="footer-copyright">
            <p>Copyright @ 2023- All Right Reserved</p>
            <hr/>
        </div>
    </div>
  )
}

export default Footer