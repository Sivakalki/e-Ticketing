import {Link} from "react-router-dom";
export default function Login(){
    return(
        <div>
            <h1>This is login page</h1>

            <div className="Signup">
                <p>If you dont have an account
                    <Link to='/signup'>Signup</Link>
                </p>
            </div>
        </div>
    )
}