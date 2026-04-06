import React from "react";
import { useState } from "react";


const ButtonActionFunctional=()=>{
  const [buttonAction,setButtonAction]=useState("")
  function handlePara()
  {
    setButtonAction("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.")
  }
  return (
    <div>
      <button id="click" onClick={handlePara}>Click</button>
      <p id="para">{buttonAction}</p>
    </div>
  )
}

export default ButtonActionFunctional