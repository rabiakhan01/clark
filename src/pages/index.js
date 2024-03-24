import React from "react";
import Layout from "../utils/layout/layout";
import Intro from "./Intro/intro";
import About from "./about/about";
import Resume from "./Resume/Resume";
import Services from "./services/services";
import Skills from "./skills/skills";
const HomePage = () => {
    return (
        <>
        <Layout>
        <Intro />
        <About />
        <Resume />
        <Services />
        <Skills />
        </Layout>
        </>
    );
}

export default HomePage;