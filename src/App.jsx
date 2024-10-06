import React from "react"
import { useState } from "react";

function App() {

  const [mode, setMode] = useState("white");
  const [textColor, setTextColor] = useState("black")

  const styling = {
    backgroundColor : mode
  }

  const textStyling = {
    color : textColor,
  }

  const Mode = mode=="white" ? "Light" : "Dark" ; 

  return(

    <div className="w-screen h-screen duration-1000 p-5"
      style={styling}
    >
        <h1 className="font-mono text-3xl font-bold  dark:text-white mb-4"
          style={textStyling}
        >This is {Mode} Mode</h1>

        <div className="rounded-xl fixed  top-20 justify-center shadow-2xl bg-gray-600 flex flex-wrap flex-col gap-4 py-2"> 
          <button className="bg-black text-white  w-40 mx-2 rounded-lg py-1"
            onClick={ () => {
                setMode("black")
                setTextColor("white")
                return
              }
            }
          >Dark Mode</button>
          <button className="bg-gray-400 text-black w-40 mx-2 rounded-lg py-1"
            onClick={ () => {
              setMode("white")
              setTextColor("black")
              return
            }
          }
          >Light Mode</button>
        </div>

    </div>
  );
}

export default App