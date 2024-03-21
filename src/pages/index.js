import React from "react";
import Layout from "../utils/layout/layout";
import Intro from "./Intro/intro";
const HomePage = () => {
    return (
        <div className="mr-10 ml-10 xl:mr-24 xl:ml-24">
        <Layout>
        <Intro />
        </Layout>
        </div>
    );
}

export default HomePage;