import React from "react";
import footerData from "../../utils/footerData";

export default function FooterCard() {
    const data = footerData.map((items) => {
        return (
            <div className="flex flex-col w-3/6 gap-10">
                <p className="text-primaryColor text-2xl font-bold">{items.heading}</p>
                <div className="flex flex-col gap-3 text-grayColor">
                    <p className="flex gap-4 text-wrap"><img src={items.arrow} alt="" height={16} width={16} />{items.element1}</p>
                    <p className="flex gap-4"><img src={items.arrow} alt="" height={16} width={16} />{items.element2}</p>
                    <p className="flex gap-4"><img src={items.arrow} alt="" height={16} width={16} />{items.element3}</p>
                    <p className="flex gap-4"><img src={items.arrow} alt="" height={16} width={16} />{items.element4}</p>
                    <p className="flex gap-4"><img src={items.arrow} alt="" height={16} width={16} />{items.element5}</p>
                </div>

            </div>
        )
    })
    return (
        <div className="flex gap-6 w-full">
            {data}
        </div>
    )
}