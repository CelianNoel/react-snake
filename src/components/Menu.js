import React from "react";
import "./Menu.css";
import Button from "./Button"
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";


const Menu = ({ highscore }) => {
  return (
    <div className="wrapper flex items-center justify-center flex-col">
        <div className="highscore text-white font-bold text-3xl">
          Highscore : {highscore}
        </div>
        
        <button
          className="start h-10"
        >
          Press spacebar to start
        </button>

      
        <div className="highscore text-white text-xl pb-4">
          Controls :
        </div>
        <Controls />
        
    </div>
  );
};


const Controls = () => {
  return (
    <div className="flex gap-16">
      <div className="flex flex-col items-center justify-center gap-1">
        <Button icon={'Z'} />
        <div className="flex gap-1">
          <Button icon={'Q'} />
          <Button icon={'S'} />
          <Button icon={'D'} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-1">
        <Button icon={<IoIosArrowUp />} />
        <div className="flex gap-1">
          <Button icon={<IoIosArrowBack />} />
          <Button icon={<IoIosArrowDown />} />
          <Button icon={<IoIosArrowForward />} />
        </div>
      </div>
    </div>
    
  )
}

export default Menu;
