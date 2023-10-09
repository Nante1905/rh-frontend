/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import "./BackOffice.scss";
import NavbarBackOffice from "../../components/back-office/sidebar/NavbarBackOffice";

const BackOffice = ({ children }: any) => {
  return (
    <>
      <div className="navbar">
        <NavbarBackOffice />
      </div>
      <div className="children">{children}</div>
    </>
  );
};

export default BackOffice;
