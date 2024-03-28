import React from "react";
import cardData from "../../utils/cardData";
const ResumeCard = () => {
    const data = cardData.map((items) => {
        return (
            <div className="flex flex-col text-primaryColor w-11/12 h-auto md:w-1/11 lg:w-5/14 lg md:h-full xl:h-auto bg-semiTransparent p-8 gap-y-4 rounded-sm">
                <p className="text-secondaryColor text-2xl sm:text-3xl  font-bold">{items.date}</p>
                <p className="text-xl sm:text-2xl font-medium">{items.degree}</p>
                <p className="text-xs font-light">{items.institute}</p>
                <p className="text-grayColor text-sm sm:text-base font-light pt-4 ">{items.description}</p>
            </div>
        );
    })
    return (
        <div className="grid md:grid-rows-3 grid-rows-6  grid-flow-col gap-x-2 gap-y-6 sm:gap-y-10 md:gap-x-0 md:gap-y-8 lg:gap-y-10  lg:gap-x-6 place-items-center lg:w-full">
            {data}
        </div>
    );
}

export default ResumeCard;