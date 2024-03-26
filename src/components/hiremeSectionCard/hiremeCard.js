import React from "react";
import hiremeData from "../../utils/hiremeData";

export default function HireMeCard() {

    const data = hiremeData.map((items) => {
        return (
            <div className="bg-divColor flex flex-col xl:w-3/12 lg:w-48 md:w-1/5 w-9/12 h-36 rounded-lg justify-center items-center text-center lg:p-0 p-10 gap-3">
                <p className="text-3xl font-bold text-secondaryColor">{items.count}</p>
                <p className="text-base font-medium text-grayShade400 ">{items.content}</p>
            </div>
        )
    })
    return (
        <>
            {data}
        </>
    );
}