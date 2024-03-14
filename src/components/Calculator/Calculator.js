import React from "react";
import Numpad from "./Numpad";
import Display from "./Display";
import { useState } from "react";

const Calculator = (props) => {
  const [valorDisplay, setValorDisplay] = useState("0");
  const [simboloDisplay, setSimboloDisplay] = useState("");
  const [segundoValor, setSegundoValor] = useState("0");
  const [resultDisplay, setResultDisplay] = useState("");

  return (
    <div>
      <h1>Calculator</h1>
      <Display
        valorDisplay={valorDisplay}
        simboloDisplay={simboloDisplay}
        segundoValor={segundoValor}
      />
      <Numpad
        setValorDisplay={setValorDisplay}
        setSimboloDisplay={setSimboloDisplay}
        valorDisplay={valorDisplay}
        setSegundoValor={setSegundoValor}
        setResultDisplay={setResultDisplay}
        segundoValor={segundoValor}
      />
    </div>
  );
};

export default Calculator;
