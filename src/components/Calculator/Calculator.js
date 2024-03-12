import React from "react";
import Numpad from "./Numpad";
import Display from "./Display";
import { useState } from "react";

const Calculator = (props) => {
  const [valorDisplay, setValorDisplay] = useState("0");
  const [simboloDisplay, setSimboloDisplay] = useState("");

  return (
    <div>
      <h1>Calculator</h1>
      <Display valorDisplay={valorDisplay} simboloDisplay={simboloDisplay} />
      <Numpad
        setValorDisplay={setValorDisplay}
        setSimboloDisplay={setSimboloDisplay}
        valorDisplay={valorDisplay}
      />
    </div>
  );
};

export default Calculator;
