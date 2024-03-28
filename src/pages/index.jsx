import React from "react";
import Layout from "../utils/layout/layout";
import Intro from "./Intro";
import About from "./about";
import Resume from "./Resume";
import Services from "./services";
import Skills from "./skills";
import Projects from "./projects";
import Blog from "./blog";
import HireMe from "./hireme";
import Contact from "./contact";
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