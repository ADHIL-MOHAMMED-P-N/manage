import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return(
        <div>
            <ul>
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
            </ul>
        </div>
    )
}
export default Nav