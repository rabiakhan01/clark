import React from "react";
import Intro from '../../components/home/Intro'
import Contact from "../../components/home/Contact";
import About from "../../components/home/About";
import Services from "../../components/home/Services";
import Skills from "../../components/home/Skills";
import Blog from "../../components/home/Blog";
import Projects from "../../components/home/Projects";
import HireMe from "../../components/home/Hireme";
import Resume from "../../components/home/Resume";

const Home = () => {
    return (
        <React.Fragment>
            <Intro />
            <About />
            <Resume />
            <Services />
            <Skills />
            <Blog />
            <Projects />
            <HireMe />
            <Contact />
        </React.Fragment>
    );
}

export default Home;