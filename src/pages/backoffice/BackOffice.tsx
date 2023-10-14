/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import "./BackOffice.scss";
import Sidebar from "../../components/sidebar/Sidebar.component";

const BackOffice = ({ children }: any) => {
  return (
    <>
      {/* <div className="navbar">
        <NavbarBackOffice />
      </div>
      <div className="children">{children}</div> */}
      <Sidebar children={children} />
    </>
  );
};

export default BackOffice;
