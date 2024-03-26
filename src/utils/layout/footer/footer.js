import React from "react";
import FooterCard from "../../../components/footerSectionCard/footerCard";
import FooterDiv from "../../../components/footerSectionDiv/footerDiv";
import FooterQuestionDiv from "../../../components/footerQuetionDiv/footerQuestionDiv";
import images from "../../../assets/images/images";
const Footer = () => {
    return (
        <footer className="flex flex-col justify-center items-center mt-28 gap-16 mb-28">
            <div className="flex md:flex-row flex-col gap-8">
                <div className=" flex flex-col w-1/2 gap-10">
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
            <div className="flex text-base text-grayColor">
                <p>Copyright ©2024 All rights reserved | This template is made with </p>
                <img src={images.heart} alt="" height={18} width={18} className="mx-1" />
                <p> by Colorlib</p>
            </div>
        </footer>
    )
}

export default Footer;