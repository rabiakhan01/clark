import React from "react";
import Button from "../../components/button/button";


const Intro = () => {
    return (
        <div className="relative flex flex-col w-full h-[700px] bg-background-image md:bg-[length:700px_700px] sm:bg-[length:500px_500px] bg-[length:400px_400px] bg-no-repeat lg:bg-[right_-6.2rem_bottom_2rem] md:bg-[center_bottom_2rem] sm:bg-[center_bottom_14rem] bg-[center_bottom_20rem]">
            <div className="md:text-7xl sm:text-5xl text-4xl font-extrabold flex flex-col lg:justify-start lg:items-start justify-center items-center text-center mt-20">
                <span className="text-secondary uppercase text-sm font-normal tracking-widest pb-4 lg:pt-0 md:pt-52 sm:pt-28 pt-20">hello!</span>
                <span className="text-primary">I'm </span>
                <span className="text-secondary">Clark Thompson</span>
                <span className="text-primary md:text-4xl  sm:text-3xl text-2xl font-medium pt-4 md:pb-8 pb-4">A Freelance Web Designer</span>
                <div className="flex flex-row gap-1">
                    <Button
                        name="hire me"
                        px="px-7"
                        py="py-4"
                        color="secondary"
                        textColor="black"

                    />
                    <Button
                        name="my works"
                        px="px-7"
                        py="py-4"
                        color="transparent"
                        textColor="primary"
                        ringColor="ring-ringColor"
                    />
                </div>
            </div>
        </div>

    )
}
export default Intro;