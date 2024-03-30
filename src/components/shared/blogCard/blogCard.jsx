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
        <div className="flex flex-col w-5/15 sm:w-55 2xl:w-120">
            <img src={blogImage} alt="" className="object-cover w-full h-80 mb-10" />
            <div className="flex gap-x-6 text-secondaryColor font-light uppercase text-xs tracking-widest">
                <p>{date}</p>
                <p>{designation}</p>
                <div className="flex gap-2 mb-2">
                    <img src={icon} alt="" height={15} width={15} />
                    <span>{count}</span>
                </div>
            </div >
            <p className="text-primaryColor font-medium text-xl mb-2">{heading}</p>
            <p className="font-light text-sm sm:text-base text-grayColor mb-2">{content}</p>
        </div >
    )
}