import { Outlet } from "react-router-dom";
import Header from "../sections/header";
import Footer from "../sections/footer/footer";
import FreeTrial from "../sections/freeTrial";
import Linkedin from "../sections/linkedin";
import Crypto from "../sections/cryptocoin/crypto";
import { ResourceQuote } from "../sections/quote/ResourceQuote";
import { Bounce, ToastContainer } from "react-toastify";

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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default Layout;
