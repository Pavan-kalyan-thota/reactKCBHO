function CalculatorInput(props){
    return (
        <>
            <input type="number" onChange={props.handler1} />
            <select onChange={props.opHandler}>
                <option value="add">+</option>
                <option value="subtraction">-</option>
                <option value="multiplication">*</option>
                <option value="division">/</option>
            </select>
            <input type="number" onChange={props.handler2}/>
        </>
    )
}

export default CalculatorInput;