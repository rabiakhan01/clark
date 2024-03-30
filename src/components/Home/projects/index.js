import React from "react";
import { ProjectCard, CommonSection } from "../../shared";
import { projectData } from "../../../utils/staticData";

export default function Projects() {
    return (
        <div className="pt-28" id="Projects">
            <CommonSection
                heading="Projects"
                description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
            />
            {
                projectData.map((item) => {
                    return (
                        <div className="flex flex-wrap w-full gap-4 justify-center items-center">
                            <ProjectCard
                                id={item.id}
                                project_name={item.project_name}
                                project_image={item.project_image}
                                category={item.category}
                            />
                        </div>
                    );
                })
            }
        </div>
    );
}
