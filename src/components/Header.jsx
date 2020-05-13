import React from 'react'
import Logo from './Logo'
import Button from '../components/Button'
import Menu from './Menu'

const Header = ({ showModal, handleShowModal }) => {

    return (
        <header>
            <nav className='navbar container'>
                <Logo dark={true}/>
                <Menu />
                <Button text='Request Invite' />
                <i 
                    className={`icon-${showModal? 'close' : 'hamburguer'}`}
                    onClick={handleShowModal}
                ></i>
            </nav>
        </header>
    )
}

export default Header