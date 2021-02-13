import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {

  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  // loading true 로딩안함
  // loding false 로딩중


  // user {name: string, age: number, gender: string}

  // 로딩이 끝나고, 멈춤상태이면서, 유저나이가 25미만
  
  function test(){
    if(!loading){
      console.log("로딩안함")
    } 
  }
  
  return (
    <div>
    </div>
  );
}

export default App;
