import React from "react";
import BlogCard from "../../components/blogCard/blogCard";
export default function Blog() {
    return (
        <div>
            <div className=" relative flex flex-col justify-center items-center mt-28" id="Blog">
                <p className="md:text-6xl text-4xl font-extrabold pb-16 text-primaryColor text-center">Our Blog</p>
                <p className="md:text-8xl text-7xl text-semiTransparent font-extrabold absolute top-2">Blog</p>
                <p className="text-grayColor text-center text-base font-light mb-16 w-8/12">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
                </p>
            </div>
            <BlogCard />
        </div>
    );
}