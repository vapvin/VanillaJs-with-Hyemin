import {useState} from 'react';

const Name = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const getName = (e) => {
        const {value} = e.target;
        setUsername(value);
    }

    const getEmail = (e) => {
        const {value} = e.target;
        setEmail(value);
    }

    return (
        <>
            <input type="text" name="username" value={username} onChange={getName} />
            <input type="text" name="email" value={email} onChange={getEmail} />
            <h1>Name: {username}</h1>
            <h2>email: {email}</h2>
        </>
    )
}

export default Name;

