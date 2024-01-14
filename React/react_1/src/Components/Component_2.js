import { useState } from "react";

function Component2() {
 
    const [inputText, setInput] = useState("")

    const handleChange = (expression) => {
        setInput(expression.target.value);
    }
    return(
        <div>
            <h2>Real-Time Text Display</h2>
            <input
                type="text"
                placeholder="Type something..."
                value={inputText}
                onChange={handleChange}
            />
        <div>
            <p>
                <strong>Text you typed:</strong> {inputText}
            </p>
        </div>
        </div>
        );
}


export default Component2;
