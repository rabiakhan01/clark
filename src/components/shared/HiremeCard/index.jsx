import React from "react";

export default function HireMeCard({
    count,
    content
}) {


    return (
        <div className="bg-divColor flex flex-col w-96 sm:w-5/16 md:w-[22%] xl:w-3/12 h-36 rounded-lg justify-center items-center text-center lg:p-0 p-10 gap-3">
            <p className="text-xl sm:text-[3vw] md:text-2xl  font-bold text-secondaryColor">{count}</p>
            <p className="text-base font-medium text-grayShade400 ">{content}</p>
        </div>
    );
}