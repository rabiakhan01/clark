import React from "react";
import FooterCard from "../../../components/footerSectionCard/footerCard";
import FooterDiv from "../../../components/footerSectionDiv/footerDiv";
import FooterQuestionDiv from "../../../components/footerQuetionDiv/footerQuestionDiv";
const Footer = () => {
    return (
        <footer className="flex flex-col justify-center items-center pt-20 md:pt-28 gap-16 mb-20 mx-6 ">
            <div className="flex lg:flex-row flex-col gap-8">
                <div className=" flex flex-col lg:w-1/2 w-full gap-6 lg:gap-10">
                    <p className="text-primaryColor text-2xl font-bold">About</p>
                    <p className="text-wrap text-grayColor text-sm sm:text-base">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className="flex gap-4 mb-10 lg:mb-0">
                        <FooterDiv />
                    </div>
                </div>
                <FooterCard />
                <div className="w-full flex flex-col gap-6 md:gap-10">
                    <p className="text-2xl text-primaryColor font-bold">Have a Question?</p>
                    <div className=" bg-se">
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