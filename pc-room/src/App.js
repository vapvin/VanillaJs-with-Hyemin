import styled, {createGlobalStyle} from 'styled-components';
import Input from './Input';
const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to right, #512DA8, #7B1FA2);
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Wrap = styled.div`
  width: 500px;
  height: 600px;
  background: #fff;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  color: #222;
  margin-bottom: 50px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
     
        <Wrap>
          <Title>Login Form</Title>
          <Input label="Email or Phone" />
          <Input label="password" />
        </Wrap>
    
    </>
  );
}

export default App;
