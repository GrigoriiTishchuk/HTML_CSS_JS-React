import React, { useState } from 'react'

export default function LightSwitch() {
    // firstly, make a hook. setLights is the hook
    const [lights, setLights] = useState(false);
    //then, make a function where logic happens
    function handleLights() {
        console.log(lights);
        if(lights){
            setLights(false);
        }
        else{
            setLights(true);
        }
    }
// actuall part, with component that shows that state is hooked.
  return (
    <div className={lights ? "background-dark" : "background-light"}>
        <button onClick={handleLights}>Switch the Lights</button>
        <p>Some text here</p>
        <h1>Big one there</h1>
    </div>
  )
}
