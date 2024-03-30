import React from "react";
import { BlogCard, CommonSection } from "../../shared";
import { blogData } from "../../../utils/staticData";
export default function Blog() {
    return (
        <div className="pt-28" id="Blog">
            <CommonSection
                heading="Our Blog"
                description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
            />
            {
                blogData.map((item) => {
                    return (
                        <div className="flex flex-wrap gap-10 sm:gap-4 md:gap-8  justify-center items-center">
                            <BlogCard
                                blogImage={item.blogImage}
                                icon={item.icon}
                                date={item.date}
                                designation={item.designation}
                                content={item.content}
                                count={item.count}
                            />
                        </div>
                    );
                })
            }
        </div>
    );
}