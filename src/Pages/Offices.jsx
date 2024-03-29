import React from 'react';
import "./CSS/Offices.css"

const Offices = () => {
    return(
        <div class="container">
    <div class="office-info">
        <div class="office-details">
            <h2>Office Name</h2>
            <p><span>Location:</span> RKU, Rajkot, India</p>
            <p><span>Phone:</span> +91 98765 43210</p>
            <p><span>Email:</span> ttsupport@tt.com</p>
        </div>
        
        <div class="online-contact">
            <h2>Online Contact Information</h2>
            <div class="contact-label">
                <div class="label">Website:</div>
                <div class="value"><a href="https://www.timetrove.com">www.timetrove.com</a></div>
            </div>
            <div class="contact-label">
                <div class="label">Contact Form:</div>
                <div class="value"><a href="https://www.timetrove.com/contact">www.timetrove.com/contact</a></div>
            </div>
        </div>
        
        
    </div>
</div>
    )
}

export default Offices