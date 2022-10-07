import React, {useState} from 'react';
// import { Link } from 'react-router-dom';
import '../App.css'

function Contact() {
    const [userData, setUserData] = useState([]);
    const [formInputData, setFormInputData] = useState({
		email: "",
		message: ""
	});
    const addRecord = (data) => {
		userData([...userData, data]);
	};
	const subscribe = async (event) => {
		event.preventDefault();
		try {
			const fetchData = await fetch("http://localhost:4000/users", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: formInputData.email,
					message: formInputData.message
				}),
			});
			const fetchResponse = await fetchData.json();
			addRecord(fetchResponse);
			setFormInputData({
				email: "",
				message: "",
			});
		} catch (err) {
			console.log(err);
		}
	};
	const captureUserEntries = (e) => {
		setFormInputData({ ...formInputData, [e.target.email]: e.target.value });
	};
    return(
      // <Link to="/"> Contact</Link>
        <div className="form">
            <div className="form-body">
                <input  type="email" name="email" id="email" value={formInputData.email} onChange={captureUserEntries} placeholder="Email"/>
                <input  type="textarea" name='message' id="textarea" value={formInputData.message} onChange={captureUserEntries} placeholder="Enter Message ..."/>
            </div>
            <div class="footer">
                <button onSubmit={subscribe} type="submit" class="btn">Submit</button>
            </div>
        </div>
       
    )       
}

export default Contact;