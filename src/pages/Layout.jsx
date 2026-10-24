import { Outlet } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import Header from "../sections/header/header";
import { I18nProvider } from "../store/i18nProvider";
import { lazy, Suspense } from "react";

const Footer = lazy(() => import("../sections/footer/footer"));
const Crypto = lazy(() => import("../sections/cryptocoin/crypto"));
const Linkedin = lazy(() => import("../sections/linkedin"));

function Layout() {
  return (
    <I18nProvider>
      <>
        <Header />
        <Outlet />

        {/* <FreeTrial /> */}
        {/* <ResourceQuote /> */}
        <Suspense fallback={<div>Loading...</div>}>
          <Crypto />
          <Linkedin />
          <Footer />
        </Suspense>
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
    </I18nProvider>
  );
}

export default Layout;
