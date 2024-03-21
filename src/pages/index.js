import React from "react";
import Layout from "../utils/layout/layout";
import Intro from "./Intro/intro";
import About from "./about/about";
const HomePage = () => {
    return (
        <>
        <Layout>
        <Intro />
        <About />
        </Layout>
        </>
    );
}

export default HomePage;