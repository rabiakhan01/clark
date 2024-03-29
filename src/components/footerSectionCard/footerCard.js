import React from "react";
import { footerSectionCardData } from "../../utils/Data";

export default function FooterCard() {
    const data = footerSectionCardData.map((items) => {
        return (
            <div className="flex flex-col sm:w-3/5 mb-10  gap-6 lg:gap-10">
                <p className="text-primaryColor text-2xl font-bold">{items.heading}</p>
                <div className="flex flex-col gap-2 text-grayColor text-sm sm:text-base text-nowrap ">
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
        <div className="flex md:flex-row flex-col w-full ">
            {data}
        </div>
    )
}