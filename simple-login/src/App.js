import {useState} from 'react';

function App() {
  const [isLogged, setIsLogged] = useState(false);
    const [userid, setUserId] = useState("");
    const [message, setMessage] = useState("로그인 해주세요")
    
    const onChange = (event) => {
        const {value} = event.target;
        setUserId(value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(userid === "testid"){
            setIsLogged(true);
            setMessage("로그인성공");
        } else {
            setIsLogged(false);
            setMessage("아이디가 틀립니다.");

        }

        setUserId("");
    }

    const loggedOut = (e) => {
        e.preventDefault();
        setMessage("로그아웃");
        setIsLogged(false);
    }
    
    
    return (
        <>
            {!isLogged ? (
                <>
                <form onSubmit={onSubmit}>
                    <input type="text" onChange={onChange} value={userid} />
                    <button type="submit">Log in</button>
                </form>
                <ul>
                    <li>{message}</li>
                </ul>
                </>
            ) : (
            <>
                <h1>{message}</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Work</li>
                    <li>Contact</li>
                    <button onClick={loggedOut}>Log out</button>
                </ul>
            </>
            )}
        </>
    )
}

export default App;

