import { Outlet } from "react-router-dom";
import Header from '../sections/header';
import Footer from '../sections/footer';
import Linkedin from "../sections/linkedin";
import FreeTrial from "../sections/freeTrial";
import Crypto from "../sections/crypto";

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Crypto />
            <FreeTrial />
            <Linkedin />
            <Footer />
        </>
    );
}

export default Layout;
