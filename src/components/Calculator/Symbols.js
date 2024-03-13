import React from "react";

const Symbols = (props) => {
  const setSimboloDisplay = props.setSimboloDisplay;
  const simbolo = props.simbolo;
  const setValorDisplay = props.setValorDisplay;
  const valorDisplay = props.valorDisplay;
  const setSegundoValor = props.setSegundoValor;
  const setResultDisplay = props.setResultDisplay;

  const handleClick = () => {
    setSimboloDisplay((prev) => {
      if (simbolo == "+-") {
        const valorNeg = valorDisplay * -1;
        setValorDisplay(valorNeg);
        //return simbolo;
      } else if (simbolo == ".") {
        let value = false;
        let tempValor = valorDisplay;
        tempValor = tempValor + ".";
        for (let i = 0; i < valorDisplay.length; i++) {
          if (valorDisplay[i] == ".") {
            value = true;
          }
        }
        if (value == false) {
          setValorDisplay(tempValor);
        } else {
          return;
        }
      } else {
        setSegundoValor(valorDisplay);
        setValorDisplay("0");
        return simbolo;
      }
    });
  };

  return <button onClick={handleClick}>{simbolo}</button>;
};

export default Symbols;
