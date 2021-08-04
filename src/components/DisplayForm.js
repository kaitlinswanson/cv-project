import React from 'react';

const DisplayForm = ({inputName, inputEmail, inputPhone, inputEducation, inputExperience}) => {

    const editHandler = (e) => {
        e.preventDefault();
        document.getElementById("form").style.display = "flex"

    }
    return (
        <section className="fullDisplay">
        <div className="display">
            <div className="nameDisplay">{inputName}</div>
            <div className="phoneDisplay">{inputPhone}</div>
            <div className="emailDisplay">{inputEmail}</div>
            <br></br>
            <div className="educationDisplay">{inputEducation}</div>
            <br></br>
            <div className="experienceDisplay">{inputExperience}</div>
        </div>
        <button onClick={editHandler} className="edit" id="edit">Edit</button>
        </section>
    )
}

export default DisplayForm;