import React from "react";
import FooterCard from "../../../components/footerSectionCard/footerCard";
import FooterDiv from "../../../components/footerSectionDiv/footerDiv";
import FooterQuestionDiv from "../../../components/footerQuetionDiv/footerQuestionDiv";
import Heart from '@iconscout/react-unicons/icons/uil-heart-sign';
const Footer = () => {
    return (
        <footer className="flex flex-col justify-center items-center mt-28 gap-16 mb-28">
            <div className="flex lg:flex-row-reverse flex-col gap-8">
                <div className=" flex flex-col lg:w-1/2 w-full gap-10">
                    <p className="text-primaryColor text-2xl font-bold">About</p>
                    <p className="text-wrap text-grayColor text-base">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className="flex gap-4">
                        <FooterDiv />
                    </div>
                </div>
                <FooterCard />
                <div className="flex flex-col gap-10 w-1/2">
                    <p className="text-2xl text-primaryColor font-bold">Have a Question?</p>
                    <div className="">
                        <FooterQuestionDiv />
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center text-base  text-grayColor">
                <p className="text-center">Copyright ©2024 All rights reserved | This template is made</p>
                <Heart color="rgba(255, 255, 255, 0.5)" />
                <p>by Colorlib</p>

            </div>
        </footer>
    )
}

export default Footer;