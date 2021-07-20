import React from 'react';

const DisplayForm = ({inputName}) => {

    const editHandler = (e) => {
        e.preventDefault();
        document.getElementById("form").style.display = "flex"

    }
    return (
        <section className="fullDisplay">
        <div className="display">
            <div className="nameDisplay">Name:{inputName}</div>
            <div className="phoneDisplay">Phone:</div>
            <div className="emailDisplay">Email:</div>
            <div className="educationDisplay">Education:</div>
            <div className="experienceDisplay">Experience:</div>
            <button onClick={editHandler} className="edit">Edit</button>
        </div>
        </section>
    )
}

export default DisplayForm;