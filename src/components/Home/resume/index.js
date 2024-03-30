import React from "react";
import { resumeData } from "../../../utils/staticData";
import { CommonSection, Button, ResumeCard } from "../../shared";

const Resume = () => {
    return (
        <div className="flex pt-28 flex-col h-1vh w-full justify-center items-center" id="Resume">
            <CommonSection
                heading="Resume"
                description="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
            />
            <div className="grid md:grid-rows-3 grid-rows-6  grid-flow-col gap-x-2 gap-y-4 sm:gap-y-10 md:gap-x-0 md:gap-y-8 lg:gap-y-10  lg:gap-x-6 place-items-center lg:w-full">
                {
                    resumeData.map((item, index) => {
                        return (
                            <div className="grid md:grid-rows-3 grid-rows-6  grid-flow-col gap-x-2 gap-y-4 sm:gap-y-10 md:gap-x-0 md:gap-y-8 lg:gap-y-10  lg:gap-x-6 place-items-center lg:w-full">
                                <ResumeCard
                                    date={item.date}
                                    degree={item.degree}
                                    institute={item.institute}
                                    description={item.description}
                                />
                            </div>
                        );
                    })
                }
            </div>
            <div className="text-blackColor sm:mt-20 mt-10">
                <Button
                    name="Download cv"
                    px="sm:px-7"
                    py="sm:py-4"
                    sm_px="px-4"
                    sm_py="py-4"
                    md_bg="bg-secondaryColor"
                    color="lg:bg-secondaryColor"
                    ringColor="ring-secondaryColor"
                />
            </div>
        </div>
    );
}

export default Resume;