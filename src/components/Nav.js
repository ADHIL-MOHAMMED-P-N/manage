import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'
import Getstarted from './GetStarted'

const Nav = () => {
    return   (
        <div className='navbar'>
            <div className="logo">
                <img src="./images/logo.svg" alt="logo" />
            </div>
            <div className="navlist"><ul>
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="career">
                    <li>Career</li>
                </Link>
                <Link to="community">
                    <li>Community</li>
                </Link>
                <Link to="pricing">
                    <li>Pricing</li>
                </Link>
                <Link to="product">
                    <li>Product</li>
                </Link>
            </ul></div>
            <div>
                <Getstarted />
            </div>
            
        </div>
    )
}
export default Nav