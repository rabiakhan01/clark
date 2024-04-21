import React from "react";
import NavBar from './NavBar';
import Footer from "./Footer";
const Layout = ({ children }) => {
    return (
        <div className="html mx-5 sm:mx-10 lg:mx-16 xl:mx-20 2xl:max-w-[1200px] 2xl:my-0 2xl:mx-auto">
            <NavBar />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;
