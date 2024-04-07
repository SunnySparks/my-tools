import React from "react";
import Header from "./Header";
import Calculator from "../Calculator/Calculator";
import TodoContainer from "../Todo/TodoContainer";
import Calendar from "../Calendar/Calendar";
import Weather from "../Weather/Weather";

const Layout = ({ children, navOptions = [] }) => {
  return (
    <>
      <Header navOptions={navOptions} />
      <Calculator />
      <TodoContainer />
      <Calendar />
      <Weather />
      <main>{children}</main>
      {/* <Style></Style> */}
    </>
  );
};

export default Layout;
