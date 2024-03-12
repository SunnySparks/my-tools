import React from "react";

const Symbols = (props) => {
  const setSimboloDisplay = props.setSimboloDisplay;
  const simbolo = props.simbolo;
  const setValorDisplay = props.setValorDisplay;
  const valorDisplay = props.valorDisplay;

  const handleClick = () => {
    setSimboloDisplay((prev) => {
      if (simbolo == "+-") {
        const valorNeg = valorDisplay * -1;
        setValorDisplay(valorNeg);
        return simbolo;
      } else {
        return simbolo;
      }
    });
  };

  return <button onClick={handleClick}>{simbolo}</button>;
};

export default Symbols;
