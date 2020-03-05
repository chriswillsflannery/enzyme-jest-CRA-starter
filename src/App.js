import React from 'react';
import './App.scss';
import Header from './components/header/index.js';
import Headline from './components/headline/index.js';

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
    </div>
  );
}

export default App;
