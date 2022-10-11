import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layouts = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen justify-between bg-gray-600">
      <Navbar />
      <main className="flex flex-col justify-center align-center items-center m-20 ">{children}</main>
      <Footer />
    </div>
  );
};

export const Layout = React.memo(Layouts);

