import React from "react";
import calcImg from "../img/proj_img/calc.png";
import ageCalcImg from "../img/proj_img/ageCalc.png";
import blogImg from "../img/proj_img/blog.png";
import todoImg from "../img/proj_img/todo.png";
import spaceImg from "../img/proj_img/spaceImg.png";



function Project() {
  return (
    <div className="projectSec">
       <h3 className="secTitl">Projects</h3>
       <div className="cardCont">
          
          <div className="projCard">
            <h2><a href="https://calculator-online-neon.vercel.app" target="_blank" rel="noopener noreferrer">Calculator App</a></h2>
            <img src={calcImg} alt="calc" ></img>
          </div>
          <div className="projCard">
            <h2><a href="https://age-calc-website.vercel.app" target="_blank" rel="noopener noreferrer">Age-calculator App</a></h2>
            <img src={ageCalcImg} alt="Agecalc" ></img>
          </div>
          <div className="projCard">
            <h2><a href="https://github.com/vigasselvan/BLOG" target="_blank" rel="noopener noreferrer">Blogging App</a></h2>
            <img src={blogImg} alt="blog" ></img>
          </div>
          <div className="projCard">
            <h2><a href="https://github.com/vigasselvan/todo-list-website" target="_blank" rel="noopener noreferrer">Todo App</a></h2>
            <img src={todoImg} alt="todo" ></img>
          </div>
          <div className="projCard">
            <h2><a href="https://space-tourism-mauve-omega.vercel.app/" target="_blank" rel="noopener noreferrer">Space-Tourism website</a></h2>
            <img src={spaceImg} alt="SpaceTourism" ></img>
          </div>
       </div>
    </div>
  );
}

export default Project;
