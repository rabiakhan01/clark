import React from "react";
import { resumeData } from "../../../utils/staticData";
import { CommonSection, Button, ResumeCard } from "../../shared";

const Resume = () => {
    return (
        <div className="flex pt-16 sm:pt-20 md:pt-28 flex-col w-full justify-center items-center" id="Resume">
            <CommonSection
                heading="Resume"
                description="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
            />
            <div className="flex flex-wrap w-full gap-4 md:gap-6  justify-center items-center">
                {
                    resumeData.map((item) => {
                        return (

                            <ResumeCard
                                id={item.id}
                                date={item.date}
                                degree={item.degree}
                                institute={item.institute}
                                desc={item.description}
                            />

                        );
                    })
                }
            </div>
            <div className="text-blackColor mt-8 sm:mt-20">
                <Button
                    name="Download cv"
                    bgColor="secondaryColor"
                    ringColor="secondaryColor"
                />
            </div>
        </div>
    );
}

export default Resume;