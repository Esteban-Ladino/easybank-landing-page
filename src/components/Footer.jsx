import React from 'react'
import Button from './Button'
import Logo from './Logo'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-links">
                    <Logo dark={false}/>
                    <div className="social">
                        <i className="icon-facebook"></i>
                        <i className="icon-youtube"></i>
                        <i className="icon-twitter"></i>
                        <i className="icon-pinterest"></i>
                        <i className="icon-instagram"></i>
                    </div>
                </div>
                <ul>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">Careers</a></li>
                    <li><a href="/">Support</a></li>
                    <li><a href="/">Privacy Policy</a></li>
                </ul>
                <div className="footer-more">
                    <Button text='Request Invite' />
                    <span className="copyright">© Easybank. All Rights Reserved</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
