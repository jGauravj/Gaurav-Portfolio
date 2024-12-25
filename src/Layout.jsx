import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div className="bg-[#0D0D0F]  w-full flex flex-col">
      <Navbar />
      <div className="flex-1 flex justify-center bg-[#0D0D0F]">
        <div className="w-full max-w-screen-xl md:px-16 lg:px-0">
          <Outlet />
        </div>
      </div> 
     
       <Footer />
    </div>
  );
};

export default Layout;
