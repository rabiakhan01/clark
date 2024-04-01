import React from "react";
import Button from "../../../components/shared/button/button";

const Intro = () => {
    return (
        <div className="pt-28 relative flex flex-col w-full md:h-[700px] h-[500px] bg-background-image bg-[length:420px_420px] md:bg-[length:700px_700px] sm:bg-[length:500px_500px] bg-no-repeat lg:bg-[right_-6.2rem_bottom_0rem] md:bg-[center_bottom_1rem] sm:bg-[center_bottom_0rem] bg-[center_bottom_2rem]" id="Home" >
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold flex flex-col lg:justify-start lg:items-start justify-center items-center text-center pt-36 sm:pt-40 md:pt-56 lg:pt-0 2xl:pt-40">
                <span className="text-primaryColor lg:text-secondaryColor uppercase text-base sm:text-[2.5vw] md:text-[2vw] lg:text-sm font-medium lg:font-light tracking-widest pb-2 sm:pb-5 lg:pb-10">hello!</span>
                <span className="text-primaryColor">I'm <span className="text-secondaryColor">Clark </span></span>
                <span className="text-secondaryColor">Thompson</span>
                <span className="text-primaryColor text-xl md:text-2xl font-medium pt-2 pb-4 md:pb-8">A Freelance Web Designer</span>
                <div className="flex flex-row gap-2 ml-1">
                    <Button
                        name="hire me"
                        bgColor={true}
                        textColor={true}
                    />
                    <Button
                        name="my works"
                        ringColor={true}
                    />
                </div>
            </div>
        </div>

    )
}
export default Intro;