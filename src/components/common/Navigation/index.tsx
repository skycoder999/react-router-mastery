import React from 'react';
import { Link } from 'react-router-dom';
import * as SC from './styled'

const Navigation: React.FC = () => {
    return (
        <SC.Navigation>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li> <Link to="/shop">Shop</Link></li>
                <li> <Link to="/blog">Blog</Link></li>
                <li> <Link to="/contact">Contact Us</Link></li >

                {/* <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/shop">Shop</a>
                <a href="/blog">Blog</a>
                <a href="/contact">Contact</a> */}
            </ul >
        </SC.Navigation >
    )
}

export default Navigation;
