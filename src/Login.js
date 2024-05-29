import { useState , useContext } from "react";
import {Link} from "react-router-dom";
import axios from 'axios';
import './Login.css';
import UserContext from "./UserContext";
// import { useContext } from './UserContext';


export default function Login(){
    const [user,setuser]=useState({
        email:'',
        password:'',
        error:''
    });
    const [loading,setloading] = useState(false);
    const [username, setUsername] = useState('');
    const { user:MainUser ,setUser } = useContext(UserContext);
    const [err,seterr] = useState('');
    const [msg,setmsg]=useState('');
    const checkUser=async(e)=>{
        console.log("checked user");
        e.preventDefault();
        setloading(true);
        try{
            const response = await axios.post('http://localhost:5000/login',user);
            setmsg(response.data.message);
            seterr('');
            console.log(response.data.name);
            setUsername(response.data.name);
            // console.log(username);
            setUser(response.data.name);
            console.log(MainUser);
            console.log("juekalf");

        }
        catch(error){
            console.error('Error:',error.response.data.error);
            if(error.response && error.response.data && error.response.data.error){
                seterr(error.response.data.error);
            }
            else{
                seterr('An Error occured while signing up');
            }
        }
        finally{

            setloading(false);
        }
    }
    const changee=(e)=>{
        setuser({...user,[e.target.name]:e.target.value})
    }
    return(
        <div className="container">
            {msg && <p className="Green">{msg}</p>}
            {err && <p className="red">{err}</p>}
            <h2>Log-in</h2>
            <form className="form" onSubmit={checkUser} method="post">
              {loading && <div className="spinner" />}
                <label htmlFor="email">Email:</label>
                <input onChange={changee} type="text" id="email" name="email" required />

                <label htmlFor="password">Password:</label>
                <input onChange={changee} type="password" id="password" name="password" required />

                <input type="submit" value="Log In" />
            </form>
            <p>Don't have an account? <Link to='/signup'>Signup here</Link></p>
        </div>
    )
}