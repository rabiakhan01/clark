import React from "react";
import Button from "../../../components/shared/button/button";

const Intro = () => {
    return (
        <div className="relative flex flex-col w-full md:h-[700px] h-[500px] bg-background-image bg-[length:420px_420px] md:bg-[length:700px_700px] sm:bg-[length:500px_500px] bg-no-repeat lg:bg-[right_-6.2rem_bottom_2rem] md:bg-[center_bottom_2rem] sm:bg-[center_bottom_0rem] bg-[center_bottom_2rem]" id="Home" >
            <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold flex flex-col lg:justify-start lg:items-start justify-center items-center text-center pt-32 2xl:pt-48 md:gap-5">
                <span className="text-secondaryColor uppercase text-xl lg:text-sm lg:font-light font-bold  tracking-widest pb-2 pt-28 sm:pt-28 md:pt-52 lg:pt-0">hello!</span>
                <span className="text-primaryColor">I'm <span className="text-secondaryColor">Clark </span></span>
                <span className="text-secondaryColor">Thompson</span>
                <span className="text-primaryColor text-2xl md:text-3xl font-bold lg:font-medium pt-2 md:pb-8 pb-4">A Freelance Web Designer</span>
                <div className="flex flex-row gap-2 ml-1">
                    <Button
                        name="hire me"
                        px="sm:px-7"
                        py="sm:py-4"
                        sm_px="px-4"
                        sm_py="py-3"
                        md_bg="bg-secondaryColor"
                        color="lg:bg-secondaryColor"
                        textColor="blackColor"
                        ringColor="ring-secondaryColor"



                    />
                    <Button
                        name="my works"
                        px="sm:px-7"
                        py="sm:py-4"
                        sm_px="px-4"
                        sm_py="py-3"
                        md_bg="bg-secondaryColor"
                        color="lg:bg-transparentColor"
                        textColor="lg:text-primaryColor"
                        ringColor="ring-ringColor"
                        sm_textColor='text-blackColor'
                    />
                </div>
            </div>
        </div>

    )
}
export default Intro;