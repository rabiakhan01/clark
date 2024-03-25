import React from "react";
import projectData from "../../utils/projectData";

export default function ProjectCard() {
    const data = projectData.map((items) => {
        if (items.id === 1 || items.id === 4 || items.id === 5) {
            return (
                <div className="w-[350px] h-[280px]">
                    <img src={items.project_image} alt="" className=" object-cover h-72 w-96" />
                    <p className="text-primaryColor text-base font-medium">{items.project_name}</p>
                    <p className="text-primaryColor">{items.category}</p>
                </div>
            )
        }
        else {
            return (
                <div className=" w-[560px] h-[280px] ">
                    <img src={items.project_image} height={50} alt="" className="object-cover h-72 w-[560px]" />
                </div>
            )
        }
    })
    return (
        <div className="flex flex-wrap w-full gap-x-6 gap-y-8 justify-center items-center">
            {data}
        </div>
    );
}