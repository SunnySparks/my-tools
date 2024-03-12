import React from "react";

const Display = (props) => {
  const valorDisplay = props.valorDisplay;
  const simboloDisplay = props.simboloDisplay;

  return (
    <>
      <div id="valor">{valorDisplay}</div>
      <div id="simbolo">{simboloDisplay}</div>
    </>
  );
};

export default Display;
