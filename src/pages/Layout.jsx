import { Outlet } from "react-router-dom";
import Header from "../sections/header";
import Footer from "../sections/footer/footer";
import FreeTrial from "../sections/freeTrial";
import Linkedin from "../sections/linkedin";
import Crypto from "../sections/cryptocoin/crypto";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      
      <FreeTrial />
      <Crypto />
      <Linkedin />
      <Footer />
    </>
  );
}

export default Layout;
