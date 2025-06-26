import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DefaultLayout = () => {
  return (
    <div className="min-h-screen h-full w-screen max-w-screen flex flex-col gap-6 lg:gap-10 items-center justify-center pt-4 overflow-x-hidden">
      <Navbar />
      <div className="flex-1 ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
