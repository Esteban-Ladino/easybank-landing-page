import React from 'react'
import '../assets/styles/components/boxHead.scss';

const BoxHead = (props) => {
    return (
        <section className="boxHead">
            <div className="images">
                <figure><img className='intro-img' alt='Intro'/></figure>
                <figure><img className="mockups" alt="Mockups" /></figure>
            </div>
            <h1>Next generation digital banking</h1>
            <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
            <button className='btn'>Request Invite</button>
        </section>
    )
}

export default BoxHead
