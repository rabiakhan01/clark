import React, { useState } from "react";
import projectData from "../../utils/projectData";

export default function ProjectCard() {

    const [showdata, setShowdata] = useState(0);
    const data = projectData.map((items) => {
        if (items.id === 1 || items.id === 4 || items.id === 5) {
            return (
                <div className="relative w-128 lg:w-auto h-[280px] group-hover:bg-secondaryColor" key={items.id}>
                    <img src={items.project_image} alt="" className=" object-fit h-[280px] w-full lg:w-80 hover:opacity-20" />
                    {
                        showdata === items.id && (
                            <div class="absolute bottom-0 px-4 py-3 bg-gray-500/50 w-full text-transparentColor">
                                <p className="  group-hover:text-primaryColor text-base">{items.project_name}</p>
                                <p className="text-transparentColor group-hover:text-primaryColor text-base">{items.category}</p>
                            </div>
                        )
                    }
                </div>
            )
        }
        else {
            return (
                <div className=" w-128 h-[280px] group-hover:bg-secondaryColor">
                    <img src={items.project_image} height={50} alt="" className="object-fit h-[280px] w-full hover:opacity-20" />
                </div>
            )
        }
    })
    return (
        <div className="flex flex-wrap w-full gap-4 justify-center items-center group">
            {data}
        </div>
    );
}