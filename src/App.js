import React from "react";
import Nav from "./components/nav";
import Hello from "./components/Hello";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Nav />
      <Hello />
      <About />
      <Skills />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
