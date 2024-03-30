import React from "react";
import Intro from '../../components/Home/intro'
import Contact from "../../components/Home/contact";
import About from "../../components/Home/about";
import Services from "../../components/Home/services";
import Skills from "../../components/Home/skills";
import Blog from "../../components/Home/blog";
import Projects from "../../components/Home/projects";
import HireMe from "../../components/Home/hireme";


const Home = () => {
    return (
        <>
            <Intro />
            <About />
            <Services />
            <Skills />
            <Blog />
            <Projects />
            <HireMe />
            <Contact />
        </>
    );
}

export default Home;