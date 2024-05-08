import { useState } from "react";
import CalculatorInput from "./CalculatorInput";
import CalculatorOutput from "./CalculatorOutput";

function Calculator(){
    const [val1, setVal1] = useState(0);
    const [val2, setVal2] = useState(0);
    const [op, setOp] = useState("add");

    function handlerVal1(event){
        setVal1(Number(event.target.value));
    }

    function handlerVal2(event){
        setVal2(Number(event.target.value));
    }

    function handlerOp(event){
        setOp(event.target.value);
    }



    let result;
    switch(op){
        case "add":
            result = val1 + val2;
            break;
        case "subtraction":
            result = val1 - val2;
            break;
        case "multiplication":
            result = val1 * val2;
            break;
        case "division":
            result = val1 / val2;
            break;
        default:

    }
    return (
        <>
        <CalculatorInput handler1={handlerVal1} handler2={handlerVal2} opHandler={handlerOp}/>
        <CalculatorOutput ans={result}/>
        </>
    );
}

export default Calculator;