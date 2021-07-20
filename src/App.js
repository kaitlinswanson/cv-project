import React, { useState } from 'react';
import './App.css';
//import components
//one for the form input one for form output
import InputForm from './components/InputForm.js'
import DisplayForm from './components/DisplayForm.js'

function App() {

// states 
const [inputName, setInputName] = useState("");
const [inputEmail, setInputEmail] = useState("");
const [inputPhone, setInputPhone] = useState("");
const [inputEducation, setInputEducation] = useState("");
const [inputExperience, setInputExperience] = useState("");

  return (
    <div className="App">
    <header>CV App</header>
    <InputForm 
    inputName={inputName}
    setInputName={setInputName}

    inputEmail={inputEmail}
    setInputEmail={setInputEmail}

    inputPhone={inputPhone}
    setInputPhone={setInputPhone}

    inputEducation={inputEducation}
    setInputEducation={setInputEducation}

    inputExperience={inputExperience}
    setInputExperience={setInputExperience}
    />
    <DisplayForm
    inputName={inputName}
    inputEmail={inputEmail}
    inputPhone={inputPhone}
    inputEducation={inputEducation}
    inputExperience={inputExperience}
    />
    </div>
  )
}

export default App;
