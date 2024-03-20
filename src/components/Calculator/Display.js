import React from "react";

const Display = (props) => {
  const valorDisplay = props.valorDisplay;
  const simboloDisplay = props.simboloDisplay;
  const segundoValor = props.segundoValor;

  return (
    <>
      <div id="valor">{valorDisplay !== "0" ? valorDisplay : ""}</div>
      <div id="simbolo">{simboloDisplay}</div>
      <div id="segundoValor">{segundoValor !== "0" ? segundoValor : ""}</div>
    </>
  );
};

export default Display;
