import React from "react";
import cardData from "../../utils/cardData";
const Card = () => {
    const data = cardData.map((items) => {
        return (
            <div className="flex flex-col text-primary md:w-11/12 md:h-full xl:h-auto w-11/12 h-auto  bg-semiTransparent p-8 gap-y-4 rounded-sm">
                <p className="text-secondary text-3xl font-bold">{items.date}</p>
                <p className="text-2xl font-medium">{items.degree}</p>
                <p className="text-xs font-light">{items.institute}</p>
                <p className="text-grayColor text-base font-light pt-4 ">{items.description}</p>
            </div>
        );
    })
    return (
        <div className="grid md:grid-rows-3 grid-rows-6  grid-flow-col gap-y-10 md:gap-x-0 gapy-x-10  place-items-center">
            {data}
        </div>
    );
}

export default Card;