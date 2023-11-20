import React from "react";
import { Footer, Navbar } from "./Allcomps";

const Layout = ({ children, className }) => {
  return (
    <React.Fragment>
      <Navbar />
      <main className={className}>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export { Layout }
