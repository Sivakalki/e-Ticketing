import { useState} from "react";
import { Link } from "react-router-dom";

export default function HomePage() {

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
        <div>
            <h2>This is home page</h2>
            <div>
                {linkClicked && <Link to='/book-tkt' onClick={handleLinkClick}>Book a ticket</Link>}
            </div>
           
            
        </div>

    )
}