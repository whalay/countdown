import { Outlet } from "react-router-dom";
import background from "../assets/images/bg.jpg";
import Footer from "./Footer";

import "./MainLayout.css";
import Navbar from "./Navbar";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const MainLayout = () => {
  return (
    <div
      className="main__container "
      // style={{ backgroundImage: `url(${background})` }}
     
    >
      <Navbar/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
