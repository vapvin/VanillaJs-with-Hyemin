import React, {useState} from 'react';
import TabNav from './TabNav'
import Tab from './Tab'

function App() {

  const [selected, setSelected] = useState('menu1');
  
  return (
    <div className="App">

      <div>
        <ul>
          <li onClick={() => setSelected('menu1')} >menu1</li>
          <li onClick={() => setSelected('menu2')} >menu2</li>
          <li onClick={() => setSelected('menu3')} >menu3</li>
          <li onClick={() => setSelected('menu4')} >menu4</li>
        </ul>


        <div style={selected === 'menu1' ? {display: 'block'}:{display:'none'}}>1234124123124</div>
        <div style={selected === 'menu2' ? {display: 'block'}:{display:'none'}}>1231241251212</div>
        <div style={selected === 'menu3' ? {display: 'block'}:{display:'none'}}>1231241244124</div>
        <div style={selected === 'menu4' ? {display: 'block'}:{display:'none'}}>1231241241241</div>
      </div>
    
    
      <TabNav tabs={['menu1', 'menu2', 'menu3', 'menu4']} selected={selected} setSelected={setSelected}>
      <Tab isSelected={selected === 'menu1'}>1</Tab>
      <Tab isSelected={selected === 'menu2'}>2</Tab>
      <Tab isSelected={selected === 'menu3'}>3</Tab>
      <Tab isSelected={selected === 'menu4'}>4</Tab>
      </TabNav>
    </div>
  );
}

export default App;
