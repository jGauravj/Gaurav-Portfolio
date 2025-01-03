import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div className="bg-[#0D0D0F] items-center  w-full flex flex-col">
      <Navbar />
      <div className="flex-1 flex justify-center ">
        <div className="w-full max-w-screen-xl md:px-16 px-6 lg:px-0">
          <Outlet />
        </div>
      </div>
      <div className="w-full max-w-screen-xl md:px-16 px-6 lg:px-0">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
