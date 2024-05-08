import {useState} from 'react';

function NewsLetterField(){
    const [email, setEmail] = useState('');
    const [agreed, setAgreed] = useState(false);

    function handleEmail(event){
        setEmail(event.target.value);
    }

    function handleAgreed(event){
        setAgreed(event.target.checked);
    }

    function handleSubmit(event){
        event.preventDefault();

        let userData = {
            email,
            agreed
        }

        console.log(userData);
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' onChange={handleEmail}/>
            </div>
            <div>
                <label htmlFor='agree'>Do you agree?</label>
                <input type='checkbox' id='agree' onChange={handleAgreed} />
            </div>

            <button type='submit'>Submit</button>
        </form>
        </>
    )
}

export default NewsLetterField;