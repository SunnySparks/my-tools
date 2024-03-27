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
  let total = 0;

  const erase = () => {
    let valorTemp = valorDisplay;
    let valorArray = [];
    if (valorDisplay !== "0") {
      let simboloAnterior = simbolo;
      for (let i = 0; i < valorTemp.length - 1; i++) {
        valorArray.push(valorTemp[i]);
      }
      setValorDisplay(valorArray.toString().replace(/,/g, ""));
      if (valorDisplay.length == 0) {
        setValorDisplay("0");
      }
    } else if (
      (segundoValor !== "0" && valorDisplay === "0") ||
      (segundoValor !== "0" && valorDisplay.length == 0)
    ) {
      let valorTemp = segundoValor;
      let simboloAnterior = simbolo;
      for (let i = 0; i < valorTemp.length - 1; i++) {
        valorArray.push(valorTemp[i]);
      }
      setSegundoValor(valorArray.toString().replace(/,/g, ""));
    }
  };

  const posNeg = () => {
    const valorNeg = valorDisplay * -1;
    setValorDisplay(valorNeg);
  };

  const addDecimal = () => {
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
  };

  const doPercent = () => {
    if (segundoValor === "0") {
      let percentR = valorDisplay / 100;
      setValorDisplay(percentR);
    } else {
      return;
    }
  };

  const reset = () => {
    setValorDisplay("0");
    setSimboloDisplay("");
    setSegundoValor("0");
  };

  const afterOpSetter = () => {
    setValorDisplay(total);
    setSimboloDisplay("");
    setSegundoValor("0");
  };

  const sumOperator = () => {
    total = Number(valorDisplay) + Number(segundoValor);
  };

  const minOperator = () => {
    total = segundoValor - valorDisplay;
  };

  const multOperator = () => {
    total = valorDisplay * segundoValor;
  };

  const divOperator = () => {
    total = segundoValor / valorDisplay;
  };

  const handleClick = () => {
    if (simbolo == "⌫") {
      erase();
      return; //Had to keep this return in the code, otherwise it will imput the delete icon on the calculator and will take an extra click to start deleting
    }
    setSimboloDisplay((prev) => {
      console.log(simbolo);
      if (simbolo !== "=") {
        switch (simbolo) {
          case "+-":
            posNeg();
            break;
          case ".":
            addDecimal();
            break;
          case "%":
            doPercent();
            break;
          case "C":
            reset();
            break;
          default:
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
          switch (simboloPrev) {
            case "+":
              sumOperator();
              afterOpSetter();
              break;
            case "-":
              minOperator();
              afterOpSetter();
              break;
            case "*":
              multOperator();
              afterOpSetter();
              break;
            case "/":
              divOperator();
              afterOpSetter();
              break;
            default:
              break;
          }
        } else {
          return;
        }
      }
    });
  };

  return (
    <button onClick={handleClick} id={simbolo} class="symBtn">
      {simbolo}
    </button>
  );
};

export default Symbols;
