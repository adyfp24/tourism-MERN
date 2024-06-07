import { useState } from "react";
import React from "react";
import arrowleft from "../../assets/images/landing/arrowleft.png";
import arrowdown from "../../assets/images/landing/arrowdown.png";
  
const FaQQuestion =  ({ question, answer }) => {
    const [showAnswer, setShowAnswer] = useState(false);
  
    const buttonAnswer = () => {
      setShowAnswer(!showAnswer);
    };
  
    return (
      <div className="p-5 mt-5 bg-white rounded-lg">
        <div className="flex justify-between" onClick={buttonAnswer}>
          <p className="font-medium cursor-pointer">{question}</p>
          <img className={showAnswer ? "hidden" : "w-6 h-3"} src={arrowdown} />
          <img
            src={arrowleft}
            className={showAnswer ? "w-3 h-5" : "hidden mt-3"}
          />
        </div>
        <p id="jawaban" className={showAnswer ? "mt-3 pl-4 text-sm" : "hidden mt-3"}>
          {answer}
        </p>
      </div>
    );
  };

  export default FaQQuestion