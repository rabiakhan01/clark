import React from "react";

export default function FooterMiddleSection({
    arrow,
    element1,
    element2,
    element3,
    element4,
    element5,
    heading
}) {

    return (
        <div className="flex flex-col sm:w-3/5 mt-6 md:mt-10 lg:mt-0 gap-4 sm:gap-6 lg:gap-10">
            <h1 className="text-base sm:text-xl text-primaryColor font-medium">{heading}</h1>
            <div className="flex flex-col gap-1 text-grayColor text-sm sm:text-base text-nowrap md:mb-0">
                <p className="flex gap-4"><img src={arrow} alt="" height={16} width={16} />{element1}</p>
                <p className="flex gap-4"><img src={arrow} alt="" height={16} width={16} />{element2}</p>
                <p className="flex gap-4"><img src={arrow} alt="" height={16} width={16} />{element3}</p>
                <p className="flex gap-4"><img src={arrow} alt="" height={16} width={16} />{element4}</p>
                <p className="flex gap-4"><img src={arrow} alt="" height={16} width={16} />{element5}</p>
            </div>
        </div>
    )
}