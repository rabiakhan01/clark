import React from "react";
import { blogSectionData } from "../../utils/Data";
export default function BlogCard() {
    const data = blogSectionData.map((items) => {
        return (
            <div className="flex flex-col w-5/15 sm:w-55 2xl:w-120">
                <img src={items.blogImage} alt="" className="object-cover w-full h-80 mb-10" />
                <div className="flex gap-x-6 text-secondaryColor font-light uppercase text-xs tracking-widest">
                    <p>{items.date}</p>
                    <p>{items.designation}</p>
                    <div className="flex gap-2 mb-2">
                        <img src={items.icon} alt="" height={15} width={15} />
                        <span>{items.count}</span>
                    </div>
                </div >
                <p className="text-primaryColor font-medium text-xl mb-2">{items.heading}</p>
                <p className="font-light text-sm sm:text-base text-grayColor mb-2">{items.content}</p>
            </div >
        )
    })
    return (
        <div className="flex flex-wrap gap-10 sm:gap-4 md:gap-8  justify-center items-center">
            {data}
        </div>
    )
}