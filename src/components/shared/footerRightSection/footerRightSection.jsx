import React from "react";


export default function FooterRightSection({ icon, text }) {

    return (
        <div className="flex gap-2 w-full">
            <div className="w-10">
                <img src={icon} alt="" height={16} width={16} />
            </div>
            <div className="text-grayColor text-sm sm:text-base text-wrap w-full mb-3">
                <p>{text}</p>
            </div>
        </div>
    )
}

