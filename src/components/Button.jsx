import React from 'react'

const Button = (props) => {
    const {
        text
    } = props

    return (
        <button className='btn'><strong>{text}</strong></button>
    )
}

export default Button
