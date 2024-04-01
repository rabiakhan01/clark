import React from "react";
import Intro from '../../components/home/intro'
import Contact from "../../components/home/contact";
import About from "../../components/home/about";
import Services from "../../components/home/services";
import Skills from "../../components/home/skills";
import Blog from "../../components/home/blog";
import Projects from "../../components/home/projects";
import HireMe from "../../components/home/hireme";
import Resume from "../../components/home/resume";

const Home = () => {
    return (
        <>
            <Intro />
            <About />
            <Resume />
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