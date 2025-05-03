import React from "react";
import "./Menu.css";
import Button from "./Button"

const Menu = ({ highscore }) => {
  return (
    <div className="wrapper flex items-center justify-center flex-col">
        <div className="highscore text-white text-3xl text-bold">
          Highscore : {highscore}
        </div>
        
        <button
          className="start h-10"
        >
          Press spacebar to start
        </button>

        <div>
          <div>
            <Button icon={'A'} />
          </div>
        </div>
    </div>
  );
};

export default Menu;
