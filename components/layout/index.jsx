import React from "react";
// import navbar
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <div>FOOTER</div>
    </div>
  );
};

export default Layout;
