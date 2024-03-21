import React, { Children } from "react";
import Navbar from '../../components/navbar/navbar';
import Footer from "../../components/footer/footer";
const Layout = ({Children}) => {
    return (
        <>
        <Navbar />
        {Children}
        <Footer />
        </>
    );
}

export default Layout;