import React from "react";
import { footerData } from "../../../utils/staticData";

export default function FooterCard() {
    const data = footerData.map((items) => {
        return (
            <div className="flex flex-col sm:w-3/5 mt-6 md:mt-10 lg:mt-0 gap-4 sm:gap-6 lg:gap-10">
                <p className="text-primaryColor text-base sm:text-xl  font-medium">{items.heading}</p>
                <div className="flex flex-col gap-1 text-grayColor text-xs sm:text-sm md:text-base text-nowrap mb-2 md:mb-0">
                    <p className="flex gap-4"><img src={items.arrow} alt="" height={16} width={16} />{items.element1}</p>
                    <p className="flex gap-4"><img src={items.arrow} alt="" height={16} width={16} />{items.element2}</p>
                    <p className="flex gap-4"><img src={items.arrow} alt="" height={16} width={16} />{items.element3}</p>
                    <p className="flex gap-4"><img src={items.arrow} alt="" height={16} width={16} />{items.element4}</p>
                    <p className="flex gap-4"><img src={items.arrow} alt="" height={16} width={16} />{items.element5}</p>
                </div>

            </div>
        )
    })
    return (
        <div className="flex md:flex-row flex-col w-full">
            {data}
        </div>
    )
}