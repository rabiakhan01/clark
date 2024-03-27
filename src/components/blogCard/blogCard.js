import React from "react";
import blogData from "../../utils/blogData";
export default function BlogCard() {
    const data = blogData.map((items) => {
        return (
            <div className="flex flex-col sm:w-120 2xl:w-120 w-80 gap-6">
                <img src={items.blogImage} alt="" className="object-cover w-full h-80" />
                <div className="flex gap-x-6 text-secondaryColor font-light uppercase text-xs tracking-widest">
                    <p>{items.date}</p>
                    <p>{items.designation}</p>
                    <div className="flex gap-2">
                        <img src={items.icon} alt="" height={15} width={15} />
                        <span>{items.count}</span>
                    </div>
                </div >
                <p className="text-primaryColor font-medium text-xl">{items.heading}</p>
                <p className="font-light text-base text-grayColor">{items.content}</p>
            </div >
        )
    })
    return (
        <div className="flex flex-wrap gap-8 justify-center items-center">
            {data}
        </div>
    )
}