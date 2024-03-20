import React from "react";

const Button = (props) => {
  const setValorDisplay = props.setValorDisplay;
  const nombre = props.nombre;

  const handleClick = () => {
    setValorDisplay((prev) => {
      if (prev === "0") {
        return nombre;
      } else {
        return prev + nombre;
      }
    });
  };

  return (
    <button onClick={handleClick} id={nombre} class="numBtn">
      {nombre}
    </button>
  );
};

export default Button;
