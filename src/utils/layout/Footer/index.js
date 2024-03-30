import React from "react";
import FooterCard from "../../../components/shared/footerSectionCard/footerCard";
import FooterDiv from "../../../components/shared/footerSectionDiv/footerDiv";
import FooterQuestionDiv from "../../../components/shared/footerQuetionDiv/footerQuestionDiv";
const Footer = () => {
    return (
        <footer className="flex flex-col justify-center items-center pt-20 md:pt-28 gap-16 mb-20 ">
            <div className="flex lg:flex-row flex-col gap-8">
                <div className=" flex flex-col w-full lg:w-1/2 gap-4 sm:gap-6 lg:gap-10">
                    <p className="text-primaryColor text-base sm:text-xl font-medium">About</p>
                    <p className="text-wrap text-grayColor text-xs sm:text-sm md:text-base">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className="flex gap-3">
                        <FooterDiv />
                    </div>
                </div>
                <FooterCard />
                <div className="w-full flex flex-col gap-4 md:gap-6 lg:gap-10 mt-0 md:mt-10 lg:mt-0">
                    <p className="text-base sm:text-xl text-primaryColor font-medium">Have a Question?</p>
                    <div className="">
                        <FooterQuestionDiv />
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center text-sm sm:text-base  text-grayColor">
                <p className="text-center">Copyright ©2024 All rights reserved | This template is made by <span className="text-primaryColor">Rabia Khan</span></p>

            </div>
        </footer>
    )
}

export default Footer;