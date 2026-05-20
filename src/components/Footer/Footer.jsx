import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <p>© 2026 croasante. all rights reserved.</p>
        <ul>
            <li><Link to="/TermsOfServices">terms of services</Link></li>
            <li><Link to="/PrivacyPolicy">privacy policy</Link></li>
        </ul>
    </div>
  )
}

export default Footer