import React, { useState } from 'react';
import './App.css';
//import components
//one for the form input one for form output
import InputForm from './components/InputForm.js'
import DisplayForm from './components/DisplayForm.js'

function App() {

// states 
const [inputName, setInputName] = useState("");

  return (
    <div className="App">
    <header>CV App</header>
    <InputForm 
    inputName={inputName}
    setInputName={setInputName}
    />
    <DisplayForm
    inputName={inputName}
    />
    </div>
  )
}

export default App;
