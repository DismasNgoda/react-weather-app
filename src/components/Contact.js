import React, {useState,setState} from 'react';
import '../App.css'

function Contact() {
    
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [textarea,setTextArea] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "textarea"){
          setTextArea(value);
        }

    }

    const handleSubmit  = () => {
        console.log(firstName,lastName,email,textarea);
    }

    return(
        <div className="form">
            <div className="form-body">
                <div className="username">
                    <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
                </div>
                <div className="lastname">
                    <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
                </div>
                <div className="email">
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="textarea">
                    <input className="form__input" type="textarea"  id="textarea" value={textarea} onChange = {(e) => handleInputChange(e)} placeholder="Enter Message ..."/>
                </div>
            </div>
            <div class="footer">
                <button onClick={()=>handleSubmit()} type="submit" class="btn">Submit</button>
            </div>
        </div>
       
    )       
}

export default Contact;