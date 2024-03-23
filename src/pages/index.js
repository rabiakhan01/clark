import React from "react";
import Layout from "../utils/layout/layout";
import Intro from "./Intro/intro";
import About from "./about/about";
import Resume from "./Resume/Resume";
const HomePage = () => {
    return (
        <>
        <Layout>
        <Intro />
        <About />
        <Resume />
        </Layout>
        </>
    );
}

export default HomePage;