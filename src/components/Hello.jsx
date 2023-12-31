import React from "react";
import resume from "../NewResume1.pdf";

function Hello(){
    return (
        <div id="home">
            <div className="helloWrap">
                <div>
                    <h1>Hey <span className="hiEmoj">👋🏻</span> I'm Vigas</h1>
                </div>
            </div>
            <div className="resDown">
                <h3><a href={resume} target="_blank" rel="noopener noreferrer">RESUME📜</a></h3>
            </div>
        </div>  
    );
}

export default Hello;