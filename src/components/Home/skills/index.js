import React from "react";
import { CommonSection, SkillsCard } from "../../shared";

export default function Skills() {
    return (
        <div className="pt-16 sm:pt-20 md:pt-28" id="Skills">
            <CommonSection
                heading="Skills"
                description="Far far  away, behind the word mountains, far from the countries Vokalia and Consonantia"
            />
            <div className="grid sm:grid-rows-3 grid-rows-6 grid-flow-col gap-6 md:gap-8 w-full">
                <SkillsCard skillLevel="90%" name="Photoshope" />
                <SkillsCard skillLevel="95%" name="HTML5" />
                <SkillsCard skillLevel="70%" name="Wordpress" />
                <SkillsCard skillLevel="85%" name="jQuery" />
                <SkillsCard skillLevel="90%" name="CSS3" />
                <SkillsCard skillLevel="80%" name="SEO" />
            </div>
        </div>
    );
}