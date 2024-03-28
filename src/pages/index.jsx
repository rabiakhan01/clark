import React from "react";
import Layout from "../utils/layout/layout";
import Intro from "./Intro";
import About from "./About";
import Resume from "./Resume";
import Services from "./Services";
import Skills from "./Skills";
import Projects from "./Projects";
import Blog from "./Blog";
import HireMe from "./HireMe";
import Contact from "./Contact";
const HomePage = () => {
    return (
        <>
            <Layout>
                <Intro />
                <About />
                <Resume />
                <Services />
                <Skills />
                <Projects />
                <Blog />
                <HireMe />
                <Contact />
            </Layout>
        </>
    );
}

export default HomePage;