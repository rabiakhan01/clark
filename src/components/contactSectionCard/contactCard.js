import React from "react";
import contactData from "../../utils/contactData";

export default function ContactCard() {
    const data = contactData.map((items) => {
        return (
            <div className="flex flex-col h-64 lg:w-1/5 md:w-80 w-64 justify-center items-center gap-y-8">
                <div className="flex w-20 h-20 md:w-24 md:h-24 bg-semiTransparent justify-center items-center rounded-full">
                    <img src={items.icon} alt="" height={30} width={30} />
                </div>
                <div className="flex flex-col text-center h-32 text-sm sm:text-base">
                    <p className="text-primaryColor font-medium uppercase">{items.name}</p>
                    <p className="text-grayShade400 font-light text-center">{items.content}</p>
                </div>
            </div>
        );
    })
    return (
        <div className="flex flex-wrap justify-center items-center lg:gap-14">
            {data}
        </div>
    );
}