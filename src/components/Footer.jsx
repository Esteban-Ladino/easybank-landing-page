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
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Blog</li>
                    <li>Careers</li>
                    <li>Support</li>
                    <li>Privacy Policy</li>
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
