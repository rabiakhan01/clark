import React from "react";
import { CommonSection, SkillsCard } from "../../shared";

export default function Skills() {
    return (
        <div className="pt-28" id="Skills">
            <CommonSection
                heading="Skills"
                description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
            />
            <div className="grid md:grid-rows-3 grid-rows-6 lg:px-8 sm:px-6 px-4 grid-flow-col gap-8  w-full">
                <SkillsCard width="[90%]" name="Photoshope" />
                <SkillsCard width="[95%]" name="HTML5" />
                <SkillsCard width="[70%]" name="Wordpress" />
                <SkillsCard width="[85%]" name="jQuery" />
                <SkillsCard width="[90%]" name="CSS3" />
                <SkillsCard width="[80%]" name="SEO" />
            </div>
        </div>
    );
}