import React from "react";

function Footer(){
    return (
        <div>
            <div className="upFtrSec" id="Footer">
                <h1 className="ftrCnt">Let's work together.</h1>
                <h1 className="emailLink"><a href="mailto:vigasselvan@gmail.com" >Get in touch.</a></h1>
            </div>
            <div className="lwrFtrSec">
                <p>© Vigas.B.S 2023</p>
                <ul>
                    <li><a href="https:linkedin.com/in/vigas-selvan/" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                    <li><a href="https:github.com/vigasselvan" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href="https://twitter.com/vigas_selvan" target="_blank" rel="noopener noreferrer">Twitter</a></li> 
                    <li><a href="mailto:vigasselvan@gmail.com" target="_blank" rel="noopener noreferrer">Mail</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;