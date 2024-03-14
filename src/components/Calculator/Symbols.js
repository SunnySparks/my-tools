import React from "react";
import { useState } from "react";

const Symbols = (props) => {
  const setSimboloDisplay = props.setSimboloDisplay;
  const simbolo = props.simbolo;
  const setValorDisplay = props.setValorDisplay;
  const valorDisplay = props.valorDisplay;
  const setSegundoValor = props.setSegundoValor;
  const setResultDisplay = props.setResultDisplay;
  const segundoValor = props.segundoValor;
  const simboloPrev = props.simboloPrev;
  const setSimboloPrev = props.setSimboloPrev;

  const handleClick = () => {
    setSimboloDisplay((prev) => {
      if (simbolo !== "=") {
        if (simbolo === "+-") {
          const valorNeg = valorDisplay * -1;
          setValorDisplay(valorNeg);
        } else if (simbolo === ".") {
          let myDot = false;
          let tempValor = valorDisplay;
          tempValor = tempValor + ".";
          for (let i = 0; i < valorDisplay.length; i++) {
            if (valorDisplay[i] === ".") {
              myDot = true;
            }
          }
          if (myDot === false) {
            setValorDisplay(tempValor);
          } else {
            return;
          }
        } else if (simbolo === "%") {
          if (segundoValor === "0") {
            let percentR = valorDisplay / 100;
            setValorDisplay(percentR);
          } else {
            return;
          }
        } else if (simbolo === "C") {
          setValorDisplay("0");
          setSimboloDisplay("");
          setSegundoValor("0");
        } else {
          if (valorDisplay !== "0") {
            setSegundoValor(valorDisplay);
            setValorDisplay("0");
          }
          let simboloAnterior = simbolo;
          setSimboloPrev(simboloAnterior);
          return simbolo;
        }
      } else {
        if (segundoValor !== "0") {
          let total = 0;
          switch (simboloPrev) {
            case "+":
              total = Number(valorDisplay) + Number(segundoValor);
              setValorDisplay(total);
              setSimboloDisplay("");
              setSegundoValor("0");
              console.log(total);
              break;
            case "-":
              total = segundoValor - valorDisplay;
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
              total = segundoValor / valorDisplay;
              setValorDisplay(total);
              setSimboloDisplay("");
              setSegundoValor("0");
              break;
            default:
              break;
          }
        } else if (valorDisplay === "0" && segundoValor !== "0") {
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
