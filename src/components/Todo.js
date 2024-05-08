import { useState } from "react";

function Todo(){
    const [todos, setTodos] = useState(["Learn React", "Recommend this book."]);
    function addTodoHandler(){
        setTodos(todos => todos.concat("New Todo"));
    }

    return (
        <>
            <button onClick={addTodoHandler}>Add</button>
            <ul>{todos.map(todo => <li>{todo}</li>)}</ul>
        </>
    )
    ;
}

export default Todo;