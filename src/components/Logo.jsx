import React from 'react'
import logoDark from '../assets/static/logoDark.svg'
import logoLight from '../assets/static/logoLight.svg'

const Logo = (props) => {
    const {
        dark
    } = props;

    return (
        <figure className='logo'>
            <img src={dark? logoDark : logoLight} alt='Easy Bank Logo'/>
        </figure>
    )
}

export default Logo
