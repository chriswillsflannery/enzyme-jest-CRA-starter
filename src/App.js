import React from 'react';
import './App.scss';
import Header from './components/header/index';
import Headline from './components/headline/index';
import SharedButton from './components/button/index';

const tempArr = [{
  fName: "Chris",
  lName: "Flannery",
  email: 'myEmail',
  age: 25,
  onlineStatus: true
}]

function App() {
  return (
    <div className="App">
      <Header text="Company" />
      <Headline header="string" desc="desc" tempArray={tempArr} />
      <SharedButton buttonText="Shared Button" emitEvent={() => console.log('emitted')} />
    </div>
  );
}

export default App;
