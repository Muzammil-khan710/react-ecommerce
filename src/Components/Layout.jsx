import React from "react";
import { Footer, Navbar } from ".";

const Layout = ({ children, className = '' }) => {
  return (
    <React.Fragment>
      <Navbar />
      <main className={`main ${className}`}>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export { Layout }
