import React from "react";
import { footerMiniDivData } from "../../utils/Data";
export default function FooterDiv() {
    const data = footerMiniDivData.map((items) => {
        return (
            <div className=" flex justify-center items-center bg-semiTransparent w-12 h-12 rounded-full">
                <img src={items.icons} alt="" height={20} width={20} />
            </div>
        )
    })
    return (
        <>
            {data}
        </>
    );
}