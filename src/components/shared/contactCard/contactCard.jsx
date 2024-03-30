import React from "react";

export default function ContactCard({
    icon,
    name,
    content
}) {
    return (

        <div className="flex flex-col h-full sm:h-auto w-44 md:w-64 lg:w-1/5  justify-center items-center gap-y-6 ">
            <div className="flex w-16 sm:w-20 md:w-24  h-16 sm:h-20 md:h-24 bg-semiTransparent justify-center items-center rounded-full ">
                <img src={icon} alt="" className="w-4 sm:w-6 h-4 sm:h-6" />
            </div>
            <div className="flex flex-col text-center h-auto gap-2 text-sm md:text-base">
                <p className="text-primaryColor font-medium uppercase">{name}</p>
                <p className="text-grayShade400 font-light text-center">{content}</p>
            </div>
        </div>

    );
}