import React from "react";
import myPic from "../img/portPort2.jpeg";
import sign from "../img/sign.jpg";

function About(){
    return (
        <div className="aboutSec" id="Profile">
            <h3 className="secTitl">About</h3>

            <div className="colAboutSec">
                <div className="picSec">
                    <img src={myPic} alt="MyPic"></img>
                    <p>Pursuit of Happiness.</p>
                </div>
                <div className="aboutCont">
                    <h1>Vigas.B.S</h1>
                    <h2>I am a Computer enthusiast, passionate about creating innovative technology that makes a positive impact on the world.</h2>
                    <img src={sign} alt="Vi" height={50} width={100}></img>
                </div>
            </div>
        </div>
        
    );
}

export default About;