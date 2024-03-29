import React from "react";
import { footerQuestionDivData } from "../../utils/Data";

export default function FooterQuestionDiv() {
    const data = footerQuestionDivData.map((items) => {
        return (
            <div className="flex gap-2">
                <div className="w-10">
                    <img src={items.icon} alt="" height={16} width={16} />
                </div>
                <div className="text-grayColor text-sm sm:text-base text-wrap w-full mb-3">
                    <p>{items.text}</p>
                </div>
            </div>
        )
    })
    return (
        <>
            {data}
        </>
    )
}

