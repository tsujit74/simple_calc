import React, { useState } from 'react'



export default function Calc() {
    const [result, setResult] = useState("");

    const handleClick = (e) => {
        try {
            setResult(result.concat(e.target.name));
        }
        catch (err) {
            setResult(e.target.name)
        }

    }

    const clear = () => {
        setResult("");
    }

    const backspace = () => {
        try {
            setResult(result.slice(0, -1));
        }
        catch (err) {
            setResult("")
        }
    }

    const calculate = () => {
        try {
            setResult(eval(result.toString()));
        }
        catch (err) {
            setResult('error');
        }
    }

    const [myStyle, setmyStyle] = useState(
        {
            
        }
    )

    const [btntext, setbtnText] = useState("Light")

    const handleColor = () => {
        if (myStyle.backgroundColor === 'rgb(181, 174, 189)') {
            setmyStyle({
                backgroundColor: 'black',
                border: ' solid rgba(126, 123, 123, 0.871)'
            })
             setbtnText("Light")
        }else if(myStyle.backgroundColor==='black'){
            setmyStyle({
                backgroundColor: 'rgb(170, 70, 80)',
                border: ' solid black'
            })
             setbtnText("Light")
        }
        else{
            setmyStyle({
                backgroundColor:'rgb(181, 174, 189)',
                border:'solid blue'
            })
            setbtnText("Dark")
        }
    }

    return (
        <>
            <body>

                {/* <h1 style={{ textAlign: 'center' }}>Simple Calculator..(Sujit)</h1> */}
                <div className='container' style={myStyle} >S . T
                    {/* <button className="light" onClick={handleColor}>{btntext}</button> */}
                    <div className="form-check form-switch" style={{float:'right'}}  onClick={handleColor}>
                        <input className="form-check-input mx-6" type="checkbox" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{btntext}</label>
                    </div>
                    <form>
                        <input type="text" value={result} />
                    </form>
                    <div className="keypad">
                        <button className="botn" onClick={clear} id='clear'>clear</button>
                        <button style={{ color: 'red' }}  className="botn bt-hilight" onClick={backspace} id='backspace'>x</button>
                        <button name='/' className="botn bt-hilight" onClick={handleClick}>&divide;</button>
                        <button name='7' className="botn" onClick={handleClick}>7</button>
                        <button name='8' className="botn" onClick={handleClick}>8</button>
                        <button name='6' className="botn" onClick={handleClick}>9</button>
                        <button name='*' className="botn bt-hilight" onClick={handleClick}>&times;</button>
                        <button name='4' className="botn" onClick={handleClick}>4</button>
                        <button name='5' className="botn" onClick={handleClick}>5</button>
                        <button name='6' className="botn" onClick={handleClick}>6</button>
                        <button name='-' className="botn bt-hilight" onClick={handleClick}>&ndash;</button>
                        <button name='1' className="botn" onClick={handleClick}>1</button>
                        <button name='2' className="botn" onClick={handleClick}>2</button>
                        <button name='3' className="botn" onClick={handleClick}>3</button>
                        <button name='+' className="botn bt-hilight" onClick={handleClick}>+</button>
                        <button name='0' className="botn" onClick={handleClick}>0</button>
                        <button name='00' className="botn"onClick={handleClick}>00</button>
                        <button name='.' className="botn" onClick={handleClick}>.</button>
                        <button name='=' className="botn bt-hilight" onClick={calculate} id='result'>=</button>
                    </div>
                </div>
            </body>
        </>
    )
}
