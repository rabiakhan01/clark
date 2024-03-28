import React from "react";
import ProjectCard from "../../components/projectCard/projectCard";
export default function Projects() {
    return (
        <div className="pt-28" id="Projects">
            <div className=" relative flex flex-col justify-center items-center">
                <p className="text-4xl md:text-5xl lg:text-6xl font-extrabold sm:pb-16 pb-10 text-primaryColor text-center">Our Projects</p>
                <p className="text-5xl md:text-6xl lg:text-7xl text-semiTransparent font-extrabold absolute top-2">Projects</p>
                <p className="text-grayColor text-center text-sm sm:text-base font-light sm:mb-16 pb-10 sm:w-8/12 w-4/5">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
                </p>
            </div>
            <ProjectCard />
        </div>
    );
}
