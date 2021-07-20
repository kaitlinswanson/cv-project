import React from 'react'; 

const InputForm = ({setInputName, inputName}) => {

    const inputNameHandler = (e) => {
        console.log(e.target.value);
        setInputName(e.target.value);
    }

    const submitHandler = (e) => {
        //stops it from refreshing
        e.preventDefault();
        //hide display
        document.getElementById("form").style.display = "none"
        //setInputName("");
    }


    return (
        <form id="form">
            <label>Name: 
            <input value={inputName} onChange={inputNameHandler} className="name" type="text"></input>
            </label>
            <label>Email: 
            <input className="email"></input>
            </label>
            <label>Phone: 
            <input className="phone"></input>
            </label>
            <div>Please provide your experience below! </div>
            <label>Education:
            <input className="education"></input>
            </label>
            <label>Experience:
            <input className="experience"></input>
            </label>
        <button onClick={submitHandler} className="submit" type="submit">Submit</button>
        </form>
    )
}

export default InputForm;