import { Outlet } from "react-router-dom";
import Header from '../sections/header';
import Footer from '../sections/footer';
import AboutUs from "../sections/aboutUs";
import FreeTrial from "../sections/freeTrial";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <FreeTrial/>
      <AboutUs />
      <Footer /> 
    </>
  );
}

export default Layout;
