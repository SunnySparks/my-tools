import React from "react";

const Symbols = (props) => {
  const setSimboloDisplay = props.setSimboloDisplay;
  const simbolo = props.simbolo;
  const setValorDisplay = props.setValorDisplay;
  const valorDisplay = props.valorDisplay;
  const setSegundoValor = props.setSegundoValor;
  const setResultDisplay = props.setResultDisplay;
  const segundoValor = props.segundoValor;

  const handleClick = () => {
    setSimboloDisplay((prev) => {
      if (simbolo !== "=") {
        if (simbolo == "+-") {
          const valorNeg = valorDisplay * -1;
          setValorDisplay(valorNeg);
        } else if (simbolo == ".") {
          let myDot = false;
          let tempValor = valorDisplay;
          tempValor = tempValor + ".";
          for (let i = 0; i < valorDisplay.length; i++) {
            if (valorDisplay[i] == ".") {
              myDot = true;
            }
          }
          if (myDot == false) {
            setValorDisplay(tempValor);
          } else {
            return;
          }
        } else if (simbolo == "%") {
          if (segundoValor === "0") {
            let percentR = valorDisplay / 100;
            setValorDisplay(percentR);
          } else {
            return;
          }
        } else {
          if (valorDisplay !== "0") {
            setValorDisplay("0");
            setSegundoValor(valorDisplay);
          }
          return simbolo;
        }
      } else {
        if (segundoValor !== "0") {
          let total = 0;
          switch (simbolo) {
            case "+":
              console.log("simbolo mas");
              total = valorDisplay + segundoValor;
              setValorDisplay(total);
              setSimboloDisplay("");
              setSegundoValor("0");
              console.log(total);
              break;
            case "-":
              total = valorDisplay - segundoValor;
              setValorDisplay(total);
              setSimboloDisplay("");
              setSegundoValor("0");
              break;
            case "*":
              total = valorDisplay * segundoValor;
              setValorDisplay(total);
              setSimboloDisplay("");
              setSegundoValor("0");
              break;
            case "/":
              total = valorDisplay / segundoValor;
              setValorDisplay(total);
              setSimboloDisplay("");
              setSegundoValor("0");
              break;
            default:
              break;
          }
        } else if (valorDisplay == "0" && segundoValor !== "0") {
          //setValorDisplay(segundoValor);
          //setSegundoValor("0");
        } else {
          return;
        }
      }
    });
  };

  return <button onClick={handleClick}>{simbolo}</button>;
};

export default Symbols;
