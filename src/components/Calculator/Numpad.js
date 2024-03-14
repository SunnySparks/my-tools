import React from "react";
import Button from "./Button";
import Symbols from "./Symbols";

const listaBotones = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const listaSimbolos = ["+-", "%", "/", "*", "-", "+", "=", ".", "C"];

const Numpad = (props) => {
  const setValorDisplay = props.setValorDisplay;
  const setSimboloDisplay = props.setSimboloDisplay;
  const valorDisplay = props.valorDisplay;
  const setSegundoValor = props.setSegundoValor;
  const setResultDisplay = props.setResultDisplay;
  const segundoValor = props.segundoValor;

  return (
    <div>
      <h1>Contenedor Botones</h1>
      {listaBotones.map((nombre) => (
        <Button setValorDisplay={setValorDisplay} nombre={nombre} />
      ))}
      {listaSimbolos.map((simbolo) => (
        <Symbols
          setSimboloDisplay={setSimboloDisplay}
          simbolo={simbolo}
          setValorDisplay={setValorDisplay}
          valorDisplay={valorDisplay}
          setSegundoValor={setSegundoValor}
          setResultDisplay={setResultDisplay}
          segundoValor={segundoValor}
        />
      ))}
    </div>
  );
};

export default Numpad;
