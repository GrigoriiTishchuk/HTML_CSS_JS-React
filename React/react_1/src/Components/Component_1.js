import "./comp.css";

function Component1(){

    function handleClick(){
        alert("that but was clicked");
    }

    return( 
        <body id="c1">
        <h1>Test1</h1>
        <p>text</p>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
        <div>
            <input className="inp_field" type='text'/>
            <br></br>
            <button className="but" onClick={handleClick}> Click me </button>
        </div>
        {/*<img src={asd} className="some_image" alt="imag"/>*/}
        </body>
    )
}

export default Component1;