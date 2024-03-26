import React from "react";
import contactData from "../../utils/contactData";

export default function ContactCard() {
    const data = contactData.map((items) => {
        return (
            <div className="flex flex-col h-64 lg:w-1/5 w-80 justify-center items-center gap-y-8">
                <div className="flex w-24 h-24 bg-semiTransparent justify-center items-center rounded-full">
                    <img src={items.icon} alt="" height={30} width={30} />
                </div>
                <div className="flex flex-col text-center h-32">
                    <p className="text-primaryColor text-base font-medium uppercase">{items.name}</p>
                    <p className="text-grayShade400 text-base font-light text-center">{items.content}</p>
                </div>
            </div>
        );
    })
    return (
        <div className="flex flex-wrap justify-center items-center gap-14">
            {data}
        </div>
    );
}