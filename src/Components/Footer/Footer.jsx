import React from 'react'
import '../Footer/Footer.css'
import logo from "../Assets/logo.png";
import youtube_icon from "../Assets/youtube_icon.png";
import linkedin_icon from "../Assets/linkedin_icon.png";
import x_icon from "../Assets/x_icon.png";
import facebook_icon from "../Assets/facebook_icon.png";
import instagram_icon from "../Assets/instagram_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={logo} alt="" />
                <p>TimeTrove</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={youtube_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={linkedin_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={x_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={facebook_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024 - All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer;