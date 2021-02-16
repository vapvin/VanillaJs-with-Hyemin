
import React, {useState, useEffect} from 'react';

function App() {

  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [start, setStart] = useState(false);
  let timer;
  function play(){
    setStart(true);
  }
  function pause(){
    setStart(false);
    clearTimeout(timer);
  }

  function clear(){
    clearTimeout(timer);
    setStart(false);

    setSec(0);
    setMin(0);
    setHour(0);
  }

  useEffect(() => {
    if(start){
      timer = setTimeout(function(){
        
        setSec(sec + 1);
        if(sec > 59){
          setSec(0);
          setMin(prev => prev + 1);
        }
  
        if(min > 59){
          setMin(0);
          setHour(prev => prev + 1);
        }
  
      }, 1000);
    }
  },[start,sec]);
  
  return (
    
    <>
      <div>{hour < 10 ? `0${hour}`:hour}:{min < 10 ? `0${min}`:min}:{sec < 10 ? `0${sec}`:sec}</div>
      <button onClick={play}>start</button>
      <button onClick={pause}>stop</button>
      <button onClick={clear}>reset</button>
    </>
  );
}

export default App;
