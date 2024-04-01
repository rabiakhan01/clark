import React from "react";

export default function FooterLeftSection({ icon }) {

    return (
        <div className=" flex justify-center items-center bg-semiTransparent w-12 h-12 rounded-full">
            <img src={icon} alt="" height={20} width={20} />
        </div>
    )


}