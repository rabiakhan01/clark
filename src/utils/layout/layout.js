import React from "react";
import Navbar from '../../components/navbar/navbar';
import Footer from "../../components/footer/footer";
const Layout = ({children}) => {
    return (
        <div className="mr-10 ml-10 xl:mr-24 xl:ml-24 2xl:max-w-[1500px] 2xl:my-0 2xl:mx-auto">
        <Navbar />
        {children}
        <Footer />
        </div>
    );
}

export default Layout;