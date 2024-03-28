import React from "react";
import { servicesSectionData } from "../../utils/Data";
const ServiceCard = () => {
    const data = servicesSectionData.map((items) => {
        return (
            <div className="list bg-semiTransparent text-primaryColor  hover:bg-secondaryColor group w-11/12 sm:w-5/13 lg:w-3/13  h-56 flex flex-col justify-center items-center hover:cursor-pointer">
                <img src={items.icon} alt="" height={60} width={60} className="pb-10 group-hover:hidden" />
                <img src={items.white_icon} alt="" height={60} width={60} className="hidden group-hover:flex group-hover:pb-10" />
                <p className="text-primaryColor group-hover:text-blackColor uppercase text-sm tracking-widest font-medium group-hover:font-bold pb-8">{items.content}</p>
                <div className="h-0.5 w-10 bg-secondaryColor group-hover:bg-blackColor"></div>
            </div>
        )
    })
    return (
        <div className="flex flex-wrap gap-4 md:gap-8 lg:gap-3   justify-center items-center">
            {data}
        </div>
    );
}

export default ServiceCard;