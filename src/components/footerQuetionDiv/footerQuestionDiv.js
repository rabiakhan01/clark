import React from "react";
import footerQuestionData from "../../utils/footerQuestionData";

export default function FooterQuestionDiv() {
    const data = footerQuestionData.map((items) => {
        return (
            <div className="flex gap-2">
                <div className="w-10">
                    <img src={items.icon} alt="" height={16} width={16} />
                </div>
                <div className="text-grayColor text-base text-wrap w-full mb-5">
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

