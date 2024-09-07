import { Outlet } from "react-router-dom";
import Header from "../sections/header/header";
import Footer from "../sections/footer/footer";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Crypto /> */}
      {/* <FreeTrial /> */}
      {/* <Linkedin /> */}
      <Footer />
    </>
  );
}

export default Layout;
