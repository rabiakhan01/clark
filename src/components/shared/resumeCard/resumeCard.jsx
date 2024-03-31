import React from "react";


const ResumeCard = ({
    date,
    degree,
    institute,
    desc
}) => {

    return (
        <div className="flex flex-col text-primaryColor w-96 h-auto md:w-5/16 lg:w-96 md:h-full xl:h-auto bg-semiTransparent px-6 py-8 sm:p-8 gap-y-2 rounded-sm">
            <p className="text-secondaryColor text-[3.9vw] sm:text-[3vw] md:text-xl  font-bold">{date}</p>
            <p className="text-[3.6vw] sm:text-base md:text-lg font-medium">{degree}</p>
            <p className="text-[2.5vw] sm:text-xs font-light">{institute}</p>
            <p className="text-grayColor text-sm md:text-base font-light ">{desc}</p>
        </div>
    );
}

export default ResumeCard;