import React from 'react'
import Button from './Button'

const Hero = (props) => {
    return (
        <section className="hero">
            <div className="images">
                <figure><div className='intro-img'/></figure>
                <figure><div className="mockups"/></figure>
            </div>
            <div className="container">
                <div className="hero-details">
                    <h1>Next generation digital banking</h1>
                    <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                </div>
                <Button text='Request Invite'/>
            </div>
        </section>
    )
}

export default Hero