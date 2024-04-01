import React from "react";
import { Button, HiremeCard } from "../../shared";
import { hiremeData } from "../../../utils/staticData";

export default function HireMe() {
    return (
        <div className="pt-16 sm:pt-20 md:pt-28 h-full w-full">
            <div className="relative w-full  md:top-20 md:mb-0 mb-10 flex flex-wrap gap-4 md:gap-4 xl:gap-6 justify-center items-center z-10">
                {
                    hiremeData.map((item) => {
                        return (
                            <HiremeCard
                                count={item.count}
                                content={item.content}
                            />
                        )
                    })
                }
            </div>
            <div className="flex flex-col w-full h-[500px] bg-hireme bg-no-repeat justify-center items-center gap-6 tracking-widest bg-opacity-50 bg-[length:1400px_700px]">
                <p className="text-primaryColor text-[6.5vw] sm:text-[5.6vw] md:text-4xl font-bold text-center md:px-0 px-4">I'm <span className="text-secondaryColor">Available</span> for freelancing</p>
                <p className="text-grayColor font-light text-sm sm:text-base md:w-3/5 text-center md:px-0 px-4 sm:w-8/12 w-4/5">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                <Button
                    name="hire me"
                    bgColor="secondaryColor"
                    textColor="blackColor"
                />
            </div>


        </div>
    );
}