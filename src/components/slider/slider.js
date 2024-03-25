import React from "react";
export default function Slider({ width, name, percentage }) {
    return (
        <div className="flex flex-col">
            <div className="text-primary flex justify-between mr-10 text-xl font-medium tracking-widest pb-4">
                <p>{name}</p>
                <p className="sm:-mr-0 -mr-10">{percentage}</p>
            </div>
            <div className={`h-2.5 w-full bg-semiTransparent rounded-s-sm rounded-e-2xl`}>
                <div className={`h-2.5 ${width} bg-secondary rounded-s-sm`}>
                </div>
            </div>
        </div>
    )
}
