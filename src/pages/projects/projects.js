import React from "react";
import ProjectCard from "../../components/projectCard/projectCard";
export default function Projects() {
    return (
        <div className="mt-28" id="Projects">
            <div className=" relative flex flex-col justify-center items-center">
                <p className="md:text-6xl text-5xl font-extrabold pb-16 text-primaryColor text-center">Our Projects</p>
                <p className="md:text-8xl text-7xl text-semiTransparent font-extrabold absolute -top-2">Projects</p>
                <p className="text-grayColor text-center text-base font-light mb-16 w-">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
                </p>
            </div>
            <ProjectCard />
        </div>
    );
}
