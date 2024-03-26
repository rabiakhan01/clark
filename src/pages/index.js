import React from "react";
import Layout from "../utils/layout/layout";
import Intro from "./Intro/intro";
import About from "./about/about";
import Resume from "./Resume/resume";
import Services from "./services/services";
import Skills from "./skills/skills";
import Projects from "./projects/projects";
import Blog from "./blog/blog";
import HireMe from "./hireme/hireme";
import Contact from "./contact/contact";
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