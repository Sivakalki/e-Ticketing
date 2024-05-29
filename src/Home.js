import { useState } from "react";
import { Link } from "react-router-dom";
import bgImage from './bgImage.jpg';
import { useContext } from 'react';
// import trainVideo from './trainVideo.mp4'
import './Home.css'
import UserContext from "./UserContext";
export default function HomePage() {
    const {user:MainUser} = useContext(UserContext); 
    const [linkClicked, setLinkClicked] = useState(true);
    // const location = useLocation();
    const handleLinkClick = () => {
        setLinkClicked(false);
    }

    // useEffect(() => {
    //     const searchParams = new URLSearchParams(location.search);
    //     setLinkClicked(!searchParams.get('hideBookButton'));
    // }, [location]);

    return (
        <div className="completepage">
        
            <section className="hero">
            {MainUser ? (
                  <></>
                ) : (
                  <>
                   <h1 className="Red">You need to login before proceeding. <Link to='/login'>Login</Link></h1>
                  
                  </>
                )

                }
                <h2 className="black">Welcome to Train Ticket Reservation</h2>
                <p className="black op100">Book your train tickets hassle-free and explore the world by rail.</p>
                <Link to="/details_for_search" className="btn"><div>
                
                    {MainUser && linkClicked && <Link to='/details_for_search' onClick={handleLinkClick}>Book a ticket</Link>}
                </div>  </Link>
            </section>

            <footer>
                <p>&copy; 2024 Train Ticket Reservation. All rights reserved.</p>
            </footer>

        </div>

    )
}