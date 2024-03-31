import React from "react";

const ServiceCard = ({
    icon,
    white_icon,
    desc,
}) => {
    return (
        <div className="bg-semiTransparent text-primaryColor  hover:bg-secondaryColor group w-96 sm:w-60 md:w-80 lg:w-64 xl:w-80 h-56 flex flex-col justify-center items-center hover:cursor-pointer">
            <img src={icon} alt="" height={60} width={60} className="pb-4 group-hover:hidden" />
            <img src={white_icon} alt="" height={60} width={60} className="hidden group-hover:flex group-hover:pb-6" />
            <p className="text-primaryColor group-hover:text-blackColor uppercase text-sm tracking-widest font-medium group-hover:font-medium pb-6">{desc}</p>
            <div className="h-0.5 w-10 bg-secondaryColor group-hover:bg-blackColor mt-2"></div>
        </div>
    );
}

export default ServiceCard;