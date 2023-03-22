import React from "react";

const Button = ({ title="default value" }) => (
  <div>
    <button className="button">{title}</button>
  </div>
);

export default Button;
