import React from 'react';
import Counter from './Counter';
// hooks => useState, useEffect, useMemo, useCallback, useReduce ...  

const App = () => {

  return (
    <>
      {/* <h1>{hello}</h1>
      <h2>{bye}</h2>
      <button onClick={changeFunc}>change</button>
      <button onClick={changeByeFunc}>Byechange</button> */}
      <Counter title="Count Example" />
    </>
  );
}

export default App;

// export class App2 extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       hello: "hello",
//       bye: "bye"
//     }
//   }

//   componentDidMount(){
//     console.log("Mount");
//   }

//   componentDidUpdate(){

//   }

//   change = () => {
//     this.setState({
//       hello: "bye"
//     })
//   }

//   render(){
//     return (
//       <>
//       <h1>{this.state.hello}</h1>
//       <button onClick={this.change}>change</button>
//       </>
//     )
//   }
// }

