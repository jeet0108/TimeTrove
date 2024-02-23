import React from "react";
import threepic from '../Components/Assets/Group 91.png'
import "./CSS/Company.css"

const Company = () => {
    return(
        <div className="company-container" style={{width:'100%'}}>
            <div>
                <h1>Company information </h1>
            </div>
            <div className="details">
                <div>
                    <h3>Company Name : TimeTrove</h3>
                    <h3>Owner Name : Jeet Sabhadiya</h3>
                    <h3>Address : RKU, Rajkot, India</h3>
                    <h3>Location : Rajkot India</h3>
                    <h3>Email : timetrove@gmail.com</h3>
                </div>
                <div className="threepic">
                    <img src={threepic} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Company