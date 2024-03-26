import React from "react";
import hiremeData from "../../utils/hiremeData";

export default function HireMeCard() {

    const data = hiremeData.map((items) => {
        return (
            <div className="bg-divColor flex flex-col w-3/12 h-36 rounded-lg justify-center items-center">
                <p className="text-3xl font-bold text-secondaryColor">{items.count}</p>
                <p className="text-base font-medium text-grayShade400">{items.content}</p>
            </div>
        )
    })
    return (
        <>
            {data}
        </>
    );
}