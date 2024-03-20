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
    if (simbolo == "⌫") {
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
        return;
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
        return;
      }
      return;
    }
    setSimboloDisplay((prev) => {
      if (simbolo !== "=") {
        switch (simbolo) {
          case "+-":
            const valorNeg = valorDisplay * -1;
            setValorDisplay(valorNeg);
            break;
          case ".":
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
            break;
          case "%":
            if (segundoValor === "0") {
              let percentR = valorDisplay / 100;
              setValorDisplay(percentR);
            } else {
              return;
            }
            break;
          case "C":
            setValorDisplay("0");
            setSimboloDisplay("");
            setSegundoValor("0");
            break;
          /*case "⌫":
            let valorTemp = valorDisplay;
            let valorArray = [];
            if (valorDisplay !== "0") {
              let simboloAnterior = simbolo;
              console.log(valorTemp.length);
              for (let i = 0; i < valorTemp.length - 1; i++) {
                console.log(valorTemp[i]);
                valorArray.push(valorTemp[i]);
              }
              setValorDisplay(valorArray.toString().replace(/,/g, ""));
            }
            break;*/
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
          let total = 0;
          switch (simboloPrev) {
            case "+":
              total = Number(valorDisplay) + Number(segundoValor);
              setValorDisplay(total);
              setSimboloDisplay("");
              setSegundoValor("0");
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
