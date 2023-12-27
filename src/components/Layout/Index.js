import React from "react";
import Header from "./Header";
//import StyleSwapper from "../components/Calculator/StyleSwapper";
//import Style from "../../pages/styles";

const Layout = ({ children, navOptions = [] }) => {
  return (
    <>
      <Header navOptions={navOptions} />
      <main>{children}</main>
      <div>hiiiiiiiii</div>
      {/* <Style></Style> */}
    </>
  );
};

export default Layout;
