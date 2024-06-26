import React from "react";
export default function SkillsCard({
    skillLevel,
    name
}) {

    return (
        <div className="flex flex-col">
            <div className="text-primaryColor flex justify-between mr-2 text-sm sm:text-base md:text-md lg:text-lg font-medium sm:font-normal  tracking-widest pb-1 ">
                <p>{name}</p>
                <p>{skillLevel}</p>
            </div>
            <div className={`h-2.5 w-full bg-semiTransparent rounded-2xl`}>
                <div className={`h-2.5 bg-secondaryColor rounded-2xl`} style={{ width: skillLevel }}>
                </div>
            </div>
        </div>
    )
}
