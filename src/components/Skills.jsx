import React from "react";
import ReactLogo from "../img/react.png";
import nodeLogo from "../img/node.png";
import expressLogo from "../img/express.jpg";
import mongodbLogo from "../img/mongodb.png";
import jsLogo from "../img/js.png";
import cppLogo from "../img/c++.png";
import rustLogo from "../img/rust.png";
import restLogo from "../img/rest.png";


function Skills(){
    return (
        <div className="skillSec">
            <h3 className="secTitl">Skills</h3>
            
            <div className="skillLogo">
                <div>
                    <img src={ReactLogo} alt="react" height={150} width={150}></img>
                </div>
                <div>
                    <img src={nodeLogo} alt="node" height={150} width={150}></img>
                </div>
                <div>
                    <img src={expressLogo} alt="express" height={150} width={200}></img>
                </div>
                <div>
                    <img src={mongodbLogo} alt="mongoDB" height={150} width={200}></img>
                </div>
                <div>
                    <img src={jsLogo} alt="js" height={150} width={150}></img>
                </div>
                <div>
                    <img src={cppLogo} alt="c++" height={150} width={150}></img>
                </div>
                <div>
                    <img src={restLogo} alt="restAPI" height={150} width={200}></img>
                </div>
                <div>
                    <img src={rustLogo} alt="rust" height={150} width={150}></img>
                </div>
                
                
            </div>
            
        </div>
        
    );
}

export default Skills;