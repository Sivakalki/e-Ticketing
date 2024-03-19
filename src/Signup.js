import { useState } from "react";
import {Link} from "react-router-dom";
import axios from 'axios';
import './Signup.css'
export default function Signup(){
    const [formData,setFormData] = useState({
        username :'',
        password : '',
        email :'',
        dob:'',
        phone:'',
        age:''
    })
    const [pwd,setpwd]= useState('');
    
    const keeppwd=(e)=>{
        setpwd(e.target.value)
    }
    const checkPwd = (e) => {
        if (pwd === e.target.value) {
            setFormData({...formData, [e.target.name]: e.target.value});
        } else {
            // Handle password mismatch, such as showing an error message
            console.log("Passwords don't match");
        }
    };
    const handleChange = (e)=>{
        console.log('entered');
        setFormData({...formData,[e.target.name]:e.target.value});
    };
    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:5000/signup',formData);
            console.log(response.data);
        }
        catch(error){
            console.error('Error:' ,error.message);
        }
    };
    return(
        <div className="container">
            <h2>Sign Up for Train E-Ticketing</h2>
            <form method="post" onSubmit={handleSubmit}>
                <label htmlFor="username">User Name:</label>
                <input  onChange={handleChange} type="text" id="username" name="username" value={formData.username} required />


                <label htmlFor="email">Email:</label>
                <input onChange={handleChange} type="email" id="email" value={formData.email} name="email" required />

                <label htmlFor="password">Password:</label>
                <input onChange={keeppwd} type="password" id="password"  name="password" required />

                <label htmlFor="confirm_password">Confirm Password:</label>
                <input onChange={checkPwd} type="password" id="confirm_password" name="confirm_password" required />

                <label htmlFor="Age">Age:</label>
                <input onChange={handleChange} type="text" id="Age" name="Age" required />

                <label htmlFor="phone">Phone Number:</label>
                <input onChange={handleChange} type="text" id="phone" name="phone" required />
                <div className="dob">
                    <label htmlFor="dob">Date of Birth:</label>
                    <input onChange={handleChange} type="date" id="dob" name="dob" required />
                </div>
                    
                <div className="lang">

                <label htmlFor="language">Preferred Language:</label>
                    <select id="language" name="language" required>
                        <option value="english">English</option>
                        <option value="telugu">Telugu</option>
                        <option value="hindi">Hindi</option>
                        {/* Add more options if needed */}
                    </select>
                </div>

                {/* <input type="checkbox" id="terms" name="terms" required />
                <label htmlFor="terms">I agree to the Terms of Service and Privacy Policy</label> */}

                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <Link to='/login'>Login</Link></p>
        </div>

        // <div>
        //     <h2>Signup Page</h2>
        //     <form onSubmit={handleSubmit}>
        //             <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" required />
        //             <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        //             <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
        //             <button type="submit">Sign Up</button>
        //     </form>
        // </div>
    )
}