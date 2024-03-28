import React, { useState } from "react";
import projectData from "../../utils/projectData";

export default function ProjectCard() {

    const [showdata, setShowdata] = useState(false);

    function handelMouseEnter() {
        setShowdata(!showdata)
    }
    const data = projectData.map((items) => {
        if (items.id === 1 || items.id === 4 || items.id === 5) {
            return (
                <div className="w-53 sm:w-55 md:w-40 lg:w-50 xl:w-80 h-[280px] group bg-cover 2xl:w-96" key={items.id} style={{ backgroundImage: `url(${items.project_image})` }}>
                    <div className="group-hover:bg-secondaryColor opacity-85 h-full w-full flex flex-col justify-center items-center">
                        <p className="text-transparentColor group-hover:text-primaryColor text-xl sm:text-2xl  font-bold text-center z-20">{items.project_name}</p>
                        <p className="text-transparentColor group-hover:text-primaryColor text-sm font-medium tracking-widest z-10">{items.category}</p>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="w-53 sm:w-55 lg:w-50 md:w-40 xl:w-128 2xl:w-140 group bg-cover h-[280px] " style={{ backgroundImage: `url(${items.project_image})` }}>
                    <div className="group-hover:bg-secondaryColor opacity-85 h-full w-full flex flex-col justify-center items-center">
                        <p className="text-transparentColor group-hover:text-primaryColor text-xl sm:text-2xl font-bold text-center z-10">{items.project_name}</p>
                        <p className="text-transparentColor group-hover:text-primaryColor text-sm z-10">{items.category}</p>
                    </div>
                </div>
            )
        }
    })
    return (
        <div className="flex flex-wrap w-full gap-4 justify-center items-center">
            {data}
        </div>
    );
}