import React from "react";


const ResumeCard = ({
    date,
    degree,
    institute,
    description
}) => {

    return (
        <div className="flex flex-col text-primaryColor w-5/15 h-auto md:w-1/11 lg:w-5/14 lg md:h-full xl:h-auto bg-semiTransparent p-8 gap-y-4 rounded-sm">
            <p className="text-secondaryColor text-2xl sm:text-3xl  font-bold">{date}</p>
            <p className="text-xl sm:text-2xl font-medium">{degree}</p>
            <p className="text-xs font-light">{institute}</p>
            <p className="text-grayColor text-sm sm:text-base font-light pt-4 ">{description}</p>
        </div>
    );
}

export default ResumeCard;