import React from "react";

const CommonSection = ({ heading, description }) => {
    return (
        <div className=" relative flex flex-col justify-center items-center">
            <h1 className="text-[6.5vw] sm:text-[5.6vw] md:text-4xl font-bold  pb-10 lg:pb-14 text-primaryColor">{heading}</h1>
            <p className="text-[8.5vw] sm:text-[6.6vw] md:text-5xl   text-semiTransparent font-bold absolute top-2">{heading}</p>
            <p className="text-grayColor text-center text-sm sm:text-base md:text-base font-light pb-8 md:pb-16 w-full">{description}</p>
        </div>
    )
}


export default CommonSection;