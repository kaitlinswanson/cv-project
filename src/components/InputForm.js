import React from 'react'; 

const InputForm = ({setInputName, inputName, setInputEmail, inputEmail, inputPhone, setInputPhone, inputEducation, setInputEducation, inputExperience, setInputExperience}) => {

    const inputNameHandler = (e) => {
        console.log(e.target.value);
        setInputName(e.target.value);
    }

    const inputEmailHandler = (e) => {
        setInputEmail(e.target.value);
    }

    const inputPhoneHandler = (e) => {
        setInputPhone(e.target.value);
    }
    const inputEducationHandler = (e) => {
        setInputEducation(e.target.value);
    }

    const inputExperienceHandler = (e) => {
        setInputExperience(e.target.value);
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
            <input  value={inputEmail} onChange={inputEmailHandler} className="email"></input>
            </label>
            <label>Phone: 
            <input value={inputPhone} onChange={inputPhoneHandler} className="phone"></input>
            </label>
            <div>Please provide your experience below! </div>
            <label>Education:
            <input value={inputEducation} onChange={inputEducationHandler} className="education"></input>
            </label>
            <label>Experience:
            <input value={inputExperience} onChange={inputExperienceHandler} className="experience"></input>
            </label>
        <button onClick={submitHandler} className="submit" type="submit">Submit</button>
        </form>
    )
}

export default InputForm;