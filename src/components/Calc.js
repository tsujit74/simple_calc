import React, { useState } from 'react'



export default function Calc() {
    const [result, setResult] = useState('');

    const handleClick = (e) => {
        if (result === 0) {
            setResult(e.target.name);
        }
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
        } else if (myStyle.backgroundColor === 'black') {
            setmyStyle({
                backgroundColor: 'rgb(170, 70, 80)',
                border: ' solid black'
            })
            setbtnText("Light")
        }
        else {
            setmyStyle({
                backgroundColor: 'rgb(181, 174, 189)',
                border: 'solid blue'
            })
            setbtnText("Dark")
        }
    }

    return (
        <>
            {/* <form action="">
            <input type="text" value={result.toString()} />
        </form> */}
            {/* <h1 style={{ textAlign: 'center' }}>Simple Calculator..(Sujit)</h1> */}
            <div className='container my-1' id='heading' style={myStyle} >S . T
                {/* <button className="light" onClick={handleColor}>{btntext}</button> */}
                <div className="form-check form-switch" style={{ float: 'right' }} onClick={handleColor}>
                    <input className="form-check-input " type="checkbox" id="flexSwitchCheckDefault" style={{ cursor: 'pointer' }} />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{btntext}</label>
                </div>
                <form>
                    <input type="text" value={result} readOnly minLength={"2"} maxLength={"12"} />
                </form>
                <div className="keypad my-1" style={{ myStyle }}>
                    <button className="botn" onClick={clear} id='clear'>clear</button>
                    <button style={{ color: 'white',fontWeight:'900' }} className="botn bt-hilight" onClick={backspace} id='backspace'><svg xmlns="http://www.w3.org/2000/svg" width="37" height="25" fill="currentColor" class="bi bi-backspace" viewBox="0 1 18 16">
                        <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z" />
                        <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z" />
                    </svg></button>
                    <button name='/' className="botn bt-hilight my-2 mx-2" onClick={handleClick}>&divide;</button>
                    <button name='7' className="botn my-2 mx-2" onClick={handleClick}>7</button>
                    <button name='8' className="botn my-2 mx-2" onClick={handleClick}>8</button>
                    <button name='9' className="botn my-2 mx-2" onClick={handleClick}>9</button>
                    <button name='*' className="botn bt-hilight my-2 mx-2" onClick={handleClick}>&times;</button>
                    <button name='4' className="botn my-2 mx-2" onClick={handleClick}>4</button>
                    <button name='5' className="botn my-2 mx-2" onClick={handleClick}>5</button>
                    <button name='6' className="botn my-2 mx-2" onClick={handleClick}>6</button>
                    <button name='-' className="botn bt-hilight my-2 mx-2" onClick={handleClick}>&ndash;</button>
                    <button name='1' className="botn my-2 mx-2" onClick={handleClick}>1</button>
                    <button name='2' className="botn my-2 mx-2" onClick={handleClick}>2</button>
                    <button name='3' className="botn my-2 mx-2" onClick={handleClick}>3</button>
                    <button name='+' className="botn bt-hilight my-2 mx-2" onClick={handleClick}>+</button>
                    <button name='0' className="botn my-2 mx-2" onClick={handleClick}>0</button>
                    <button name='00' className="botn my-2 mx-2" onClick={handleClick}>00</button>
                    <button name='.' className="botn my-2 mx-2" onClick={handleClick}>.</button>
                    <button name='=' className="botn bt-hilight my-2 mx-2" onClick={calculate} id='result' >=</button>
                </div>
            </div>
        </>
    )
}
