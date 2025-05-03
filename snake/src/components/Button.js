import React from "react";
import "./Button.css";

const Button = ({icon}) => {
  return (
    <div className="bg-[#1e1e1e] h-10 w-10 rounded shadow-md shadow-gray-400 border border-gray-400 text-gray-400 font-bold flex justify-center items-center">
      {icon}
    </div>
  );
};
export default Button;
