import React from "react";
import { BlogCard, CommonSection } from "../../shared";
import { blogData } from "../../../utils/staticData";
export default function Blog() {
    return (
        <div className="pt-16 sm:pt-20 md:pt-28" id="Blog">
            <CommonSection
                heading="Our Blog"
                description="Far  far away, behind the word mountains, far from the countries Vokalia and Consonantia"
            />
            <div className="flex flex-wrap  justify-center items-center gap-8 md:gap-6 lg:gap-4">
                {
                    blogData.map((item) => {
                        return (

                            <BlogCard
                                key={item.id}
                                blogImage={item.blogImage}
                                icon={item.icon}
                                date={item.date}
                                heading={item.heading}
                                designation={item.designation}
                                content={item.content}
                                count={item.count}
                            />

                        );
                    })
                }
            </div>
        </div>
    );
}