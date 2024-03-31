import React from "react";

export default function BlogCard({
    blogImage,
    date,
    designation,
    icon,
    count,
    heading,
    content
}) {

    return (
        <div className="flex flex-col w-96 md:w-80 lg:w-[32%] xl:w-96">
            <div>
                <img src={blogImage} alt="" className="object-fit w-full h-64" />
            </div>
            <div className="flex flex-col gap-1 sm:gap-2 border-x-2 border-b-2 border-neutral-900 pt-10 px-2 pb-2">
                <div className="flex gap-x-6 text-secondaryColor font-light uppercase text-xs tracking-widest">
                    <p>{date}</p>
                    <p>{designation}</p>
                    <div className="flex gap-2 mb-2">
                        <img src={icon} alt="" height={15} width={15} />
                        <span>{count}</span>
                    </div>
                </div>
                <p className="text-primaryColor font-medium text-[3.6vw] sm:text-base xl:text-md mb-2">{heading}</p>
                <p className="font-light text-sm md:text-base text-grayColor mb-2">{content}</p>
            </div>
        </div>
    )
}