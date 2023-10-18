import { Outlet, Link } from "react-router-dom";


function Layout() {
  return (
    <>
     {/* <div id="navBar">

      </div> */}
      <Outlet />
    </>
  );
}

export default Layout;
