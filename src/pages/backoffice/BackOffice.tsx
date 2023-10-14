/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import "./BackOffice.scss";
import Sidebar from "../../components/sidebar/Sidebar.component";

const BackOffice = ({ children }: any) => {
  return (
    <>
      <Sidebar role="admin" children={children} />
    </>
  );
};

export default BackOffice;
