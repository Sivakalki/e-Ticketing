import { useState } from "react";
import {Link} from "react-router-dom";
import axios from 'axios';
import './Signup.css';
import './Login.css';
export default function Signup(){
    const [formData,setFormData] = useState({
        username :'',
        password : '',
        email :'',
        dob:'',
        phone:'',
        age:'',
        error:''
    })
    const [load,setload]=useState(false);
    const [pwd,setpwd]= useState('');
    const [pass,setpass] = useState(false);
    const keeppwd=(e)=>{
        setpwd(e.target.value)
    }
    const checkPwd = (e) => {
        if (pwd === e.target.value) {
            setFormData({...formData, [e.target.name]: e.target.value});
            console.log(e.target.name , e.target.value , "is the password details of the user");
            setpass(false);
        } else {
            setpass(true);
            // Handle password mismatch, such as showing an error message
            // highlightError('error-confirm-password');
        }
    };
    const handleChange = (e)=>{
        console.log('entered');
        setFormData({...formData,[e.target.name]:e.target.value});
    };
    const handleSubmit = async(e) =>{
        console.log("hiee");
        setload(true);
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:5000/signup',formData);
            console.log(response.data);
        }
        catch(error){
            // console.error('Error:' ,error.response.data.error);
            if(error.response && error.response.data && error.response.data.error){
                setFormData({...formData,error:error.response.data.error});
                highlightError("email");
            }
            else{
                setFormData(...formData,{error:'An Error occured while signing up'});
            }

        }
        finally{
            setload(false);
        }
    };
    const highlightError =(field)=>{
        
        const errorFields = document.getElementById(field);
        if( !errorFields.classList.contains('error')){
            errorFields.classList.add('error');
        }

    };
    return(
        <div className="container">
            <h2>Sign Up for Train E-Ticketing</h2>
            <form className="formm" method="post" onSubmit={handleSubmit}>
                {load && <div className="spinner"></div> }
                <label htmlFor="username">User Name:</label>
                <input  onChange={handleChange} type="text" id="username" name="username" value={formData.username} required />

                <label htmlFor="email" name="email">Email:</label>
                <input onChange={handleChange} type="email" id="email" value={formData.email} name="email" required />
                {formData.error && <p name = 'para' className="red">{formData.error}</p>}

                <label htmlFor="password">Password:</label>
                <input onChange={keeppwd} type="password" id="password"  name="password" required />

                <label htmlFor="confirm_password">Confirm Password:</label>
                <input onChange={checkPwd} type="password" id="confirm_password" name="password" required />
                {pass && <p id ='error-confirm-password' className="red" name='para'>passwords didnt match</p>}

                <label htmlFor="Age">Age:</label>
                <input onChange={handleChange} type="text" id="age" name="age" required />

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

                <button disabled={pass} type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <Link to='/login'>Login</Link></p>
        </div>


    )
}