import React from "react";

const CommonSection = ({ heading, description }) => {
    return (
        <div className=" relative flex flex-col justify-center items-center">
            <h1 className="text-[6.5vw] sm:text-[5.6vw] md:text-5xl font-bold pb-8 lg:pb-16 text-primaryColor">{heading}</h1>
            <p className="text-[8.5vw] sm:text-[6.6vw] md:text-6xl   text-semiTransparent font-bold absolute top-4">{heading}</p>
            <p className="text-grayColor text-center text-sm sm:text-base font-light lg:pb-8 mb-16 w-full">{description}</p>
        </div>
    )
}


export default CommonSection;