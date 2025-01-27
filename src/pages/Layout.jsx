import { Outlet } from "react-router-dom";
import Footer from "../sections/footer/footer";
import Linkedin from "../sections/linkedin";
import Crypto from "../sections/cryptocoin/crypto";
import { Bounce, ToastContainer } from "react-toastify";
import Header from "../sections/header/header";
import { I18nProvider } from "../store/i18nProvider";

function Layout() {
  return (
    <I18nProvider>
      <Header />
      <Outlet />

      {/* <FreeTrial /> */}
      {/* <ResourceQuote /> */}
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
    </I18nProvider>
  );
}

export default Layout;
