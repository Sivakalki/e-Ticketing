import { Link } from "react-router-dom";

// import { useLocation } from 'react-router-dom';
function BookTicket() {
    // const location = useLocation();
    // const showLink = new URLSearchParams(location.search).get('showLink');
    return (
        <div>
            <h1>Book Ticket Here</h1>
            <Link to='/SearchTrains'>Search Trains</Link>
        </div>
    )
}

export default BookTicket;