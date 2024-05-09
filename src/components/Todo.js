import { useState } from "react";

function Todo(){
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);

    function changeInputHandler(event){
        setInputText(event.target.value);
    }

    function addTodoHandler(event){
        event.preventDefault();
        setTodos(todos => [{id: Date.now(), text: inputText}, ...todos]);
        setInputText('');
    }

    return (
        <>
            <form onSubmit={addTodoHandler}>
                <label>Todo</label>
                <input type="text" onChange={changeInputHandler} value={inputText}/>
                <button type="submit">Add</button>
            </form>
            <ul>{todos.map(todo => <li key={todo.id}>{todo.text}</li>)}</ul>
        </>
    );
}

export default Todo;