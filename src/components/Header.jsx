import React from 'react'
import logo from '../assets/static/logo.svg'
import '../assets/styles/components/header.scss'

const Header = (props) => {
    return (
        <header>
            <nav className='navbar'>
                <figure className='header-logo'>
                    <img src={logo} alt='Easy Bank Logo'/>
                </figure>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">Careers</a></li>
                </ul>
                <button className='btn'><strong>Request Invite</strong></button>
                <i className='icon-hamburguer'></i>
            </nav>
        </header>
    )
}

export default Header