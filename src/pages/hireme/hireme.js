import React from "react";
import HireMeCard from "../../components/hiremeSectionCard/hiremeCard";
import Button from "../../components/button/button";
export default function HireMe() {
    return (
        <div className="mt-20 h-full">
            <div className="relative md:top-20 md:mb-0 mb-10 flex flex-wrap md:gap-8 gap-4 xl:gap-10 justify-center items-cente z-10">
                <HireMeCard />
            </div>
            <div className="flex flex-col w-full h-[500px] bg-hireme bg-no-repeat justify-center items-center gap-6 tracking-widest bg-opacity-50 bg-[length:1400px_700px]">
                <p className="text-primaryColor text-3xl sm:text-4xl font-extrabold text-center md:px-0 px-4">I'm <span className="text-secondaryColor">Available</span> for freelancing</p>
                <p className="text-grayColor font-light text-base md:w-3/5 text-center md:px-0 px-4 w-8/12">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                <Button
                    name="hire me"
                    px="px-12"
                    py="py-5"
                    color="bg-secondaryColor"
                    textColor="black"
                    ringColor="ring-secondaryColor"

                />
            </div>


        </div>
    );
}