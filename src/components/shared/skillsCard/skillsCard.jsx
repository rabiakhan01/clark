import React from "react";
export default function SkillsCard({ width, name }) {
    return (
        <div className="flex flex-col">
            <div className="text-primaryColor flex justify-between mr-10 text-base sm:text-xl font-medium sm:font-normal  tracking-widest pb-4 ">
                <p>{name}</p>
                <p className="sm:-mr-0 -mr-10">{width}</p>
            </div>
            <div className={`h-2.5 w-full bg-semiTransparent rounded-s-sm rounded-e-2xl`}>
                <div className={`h-2.5 w-${width} bg-secondaryColor rounded-s-sm`}>
                </div>
            </div>
        </div>
    )
}
