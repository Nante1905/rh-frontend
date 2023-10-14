/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import "./FrontOffice.scss";
import Sidebar from "../../components/sidebar/Sidebar.component";

const FrontOffice = ({ children }: any) => {
  return (
    <>
      <Sidebar role="client" children={children} />
    </>
  );
};

export default FrontOffice;
