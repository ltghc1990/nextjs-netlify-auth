import React from "react";

const Button = ({ children, color, click = () => {} }) => {
  return (
    <div
      className={`py-1 px-2 border-2 rounded-lg cursor-pointer ${color}`}
      onClick={click}
    >
      {children}
    </div>
  );
};

export default Button;
