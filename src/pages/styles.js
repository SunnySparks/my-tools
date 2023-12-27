import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import StyleSwapper from "../components/Style/StyleSwapper";

function Styles() {
  const { themes, themeChoose } = useContext(AppContext);

  return (
    <div className={`styleCont ${themes[themeChoose].className}`}>
      Change Style Here
      <StyleSwapper />
    </div>
  );
}

export default Styles;
