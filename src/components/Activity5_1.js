import { useState } from "react";

function Activity5_1(){
    const [email, setEmail] = useState('');
    const [clicked, setClicked] = useState(false);

    function emailChangeHandler(event){
        setEmail(event.target.value);
    }

    function validateEmail(event){
        event.preventDefault();
        setClicked(true);
    }

    return (
    <>
        <form onSubmit={validateEmail}>
            <label>Email</label>
            <input type="text" onChange={emailChangeHandler} value={email}/>
            <button type="submit">Validate</button>
        </form>
        {clicked && !email.includes('@') && <p>Invalid Email</p>}
    </>);
}

export default Activity5_1;