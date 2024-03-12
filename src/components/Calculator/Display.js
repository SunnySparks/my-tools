import React from "react";

const Display = (props) => {
  const valorDisplay = props.valorDisplay;
  const simboloDisplay = props.simboloDisplay;

  return (
    <>
      <div>{valorDisplay}</div>
      <div>{simboloDisplay}</div>
    </>
  );
};

export default Display;
