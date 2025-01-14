import { Outlet } from "react-router-dom";
import Header from "../sections/header";
import Footer from "../sections/footer/footer";
import FreeTrial from "../sections/freeTrial";
import Linkedin from "../sections/linkedin";
import Crypto from "../sections/cryptocoin/crypto";
import { ResourceQuote } from "../sections/quote/ResourceQuote";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      
      <FreeTrial />
      <ResourceQuote />
      <Crypto />
      <Linkedin />
      <Footer />
    </>
  );
}

export default Layout;
