import React from "react";

function Nav(){
    return (
        <div className="navWrap">
            <div className="navBar">
                <div className="NAvOpt">
                    <a href="#home">Home</a>
                </div>
                <div className="NAvOpt">
                    <a href="#Profile">Profile</a>
                </div>
                <div className="NAvOpt">
                    <a href="#Footer">Contact</a>
                </div>
            </div>
        </div>
        
    );
}

export default Nav;