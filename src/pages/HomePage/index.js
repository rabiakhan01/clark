import React from "react";

import { Intro, About, Resume, Services, Skills, Blog, Projects, HireMe, Contact } from "../../components/Home";

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