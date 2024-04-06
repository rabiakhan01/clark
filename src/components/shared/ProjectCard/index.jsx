import React, { useState } from "react";

export default function ProjectCard({
    id,
    project_image,
    project_name,
    category,

}) {
    let width;
    if (id === 1 || id === 3 || id === 5) {
        width = "700px";
    }
    else {
        width = "300px";
    }
    return (
        <div className={`mx-3 sm:mx-0 w-53 sm:w-55 md:w-50 xl:${width} xl:w-80 2xl:w-96 h-[280px] group bg-cover `} key={id} style={{ backgroundImage: `url(${project_image})` }}>
            <div className="group-hover:bg-secondaryColor opacity-85 h-full w-full flex flex-col justify-center items-center">
                <p className="text-transparentColor group-hover:text-primaryColor text-xl sm:text-2xl  font-bold text-center z-20">{project_name}</p>
                <p className="text-transparentColor group-hover:text-primaryColor text-sm font-medium tracking-widest z-10">{category}</p>
            </div>
        </div>
    )
}
