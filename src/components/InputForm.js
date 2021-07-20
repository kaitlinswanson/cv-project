import React from 'react'; 

const InputForm = () => {


    return (
        <form>
            <label>Name: 
            <input className="name"></input>
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
        <button className="submit" type="submit">Submit</button>
        </form>
    )
}

export default InputForm;