import React from 'react'
import Logo from './Logo'
import Button from '../components/Button'


const Header = (props) => {
    return (
        <header>
            <nav className='navbar container'>
                <Logo dark={true}/>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">Careers</a></li>
                </ul>
                <Button text='Request Invite' />
                <i className='icon-hamburguer'></i>
            </nav>
        </header>
    )
}

export default Header