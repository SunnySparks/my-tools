import React from "react";
import Header from "./Header";
import Calculator from "../Calculator/Calculator";
import TodoContainer from "../Todo/TodoContainer";

const Layout = ({ children, navOptions = [] }) => {
  return (
    <>
      <Header navOptions={navOptions} />
      <Calculator />
      <TodoContainer />
      <main>{children}</main>
      {/* <Style></Style> */}
    </>
  );
};

export default Layout;
