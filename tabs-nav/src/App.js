import React, {useState} from 'react';
import TabNav from './TabNav'
import Tab from './Tab'

function App() {

  const [selected, setSelected] = useState('menu1');
  
  return (
    <div className="App">
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
