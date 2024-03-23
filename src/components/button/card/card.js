import React from "react";
import cardData from "../../../utils/cardData";
const Card = () => {
    const data = cardData.map((items) => {
        return(
            <div className="flex flex-col text-primary md:w-[550px] w-auto h-auto bg-semiTransparent p-10 gap-y-4">
            <p className="text-secondary text-3xl font-extrabold">{items.date}</p>
            <p className="text-3xl">{items.degree}</p>
            <p className="text-xs">{items.institute}</p>
            <p className="text-grayColor text-xl pt-4">{items.description}</p>
            </div>
        );
    })
    return(
        <div className="flex flex-wrap gap-10 justify-center items-center">
        {data}
        </div>
    );
}

export default Card;