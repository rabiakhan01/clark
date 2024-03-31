import React from "react";
import { CommonSection, SkillsCard } from "../../shared";

export default function Skills() {
    return (
        <div className="pt-16 sm:pt-20 md:pt-28" id="Skills">
            <CommonSection
                heading="Skills"
                description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
            />
            <div className="grid md:grid-rows-3 grid-rows-6 lg:px-8 sm:px-6 px-4 grid-flow-col gap-8  w-full">
                <SkillsCard skillLevel="70%" name="Photoshope" />
                <SkillsCard skillLevel="75%" name="HTML5" />
                <SkillsCard skillLevel="70%" name="Wordpress" />
                <SkillsCard skillLevel="70%" name="jQuery" />
                <SkillsCard skillLevel="70%" name="CSS3" />
                <SkillsCard skillLevel="70%" name="SEO" />
            </div>
        </div>
    );
}