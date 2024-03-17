import {Link} from "react-router-dom";
export default function Signup(){
    return(
        <div>
            <h2>Signup Page</h2>
            <div className="Signup">
                <p>Already have an account?
                    <Link to='/login'>Login</Link>
                </p>
            </div>
        </div>
    )
}