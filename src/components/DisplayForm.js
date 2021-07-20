import React from 'react';

const DisplayForm = ({inputName, inputEmail, inputPhone, inputEducation, inputExperience}) => {

    const editHandler = (e) => {
        e.preventDefault();
        document.getElementById("form").style.display = "flex"

    }
    return (
        <section className="fullDisplay">
        <div className="display">
            <div className="nameDisplay">Name:{inputName}</div>
            <div className="phoneDisplay">Phone:{inputPhone}</div>
            <div className="emailDisplay">Email:{inputEmail}</div>
            <div className="educationDisplay">Education:{inputEducation}</div>
            <div className="experienceDisplay">Experience:{inputExperience}</div>
            <button onClick={editHandler} className="edit">Edit</button>
        </div>
        </section>
    )
}

export default DisplayForm;