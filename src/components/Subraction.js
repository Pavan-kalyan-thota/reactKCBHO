import { useState } from "react";

function Subtraction(){
    const [a, setA] = useState('');
    const [b, setB] = useState('');

    function handleA(event){
        setA(event.target.value);
    }

    function handleB(event){
        setB(event.target.value);
    }

    return (
        <>
            <input type='text' onChange={handleA} />
            <span> - </span>
            <input type="text" onChange={handleB} />
            <span> = {Number(a) - Number(b)}</span>
        </>
    )
}

export default Subtraction;