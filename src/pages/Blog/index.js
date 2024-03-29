import React from "react";
import BlogCard from "../../components/blogCard/blogCard";
export default function Blog() {
    return (
        <div className="pt-28" id="Blog">
            <div className=" relative flex flex-col justify-center items-center">
                <p className="text-4xl md:text-5xl lg:text-6xl font-extrabold pb-16 text-primaryColor text-center">Our Blog</p>
                <p className="text-5xl md:text-6xl lg:text-7xl text-semiTransparent font-extrabold absolute top-2">Blog</p>
                <p className="text-grayColor text-center text-sm sm:text-base font-light mb-16 sm:w-8/12 w-4/5">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
                </p>
            </div>
            <BlogCard />
        </div>
    );
}