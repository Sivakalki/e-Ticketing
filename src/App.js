// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Home';
import BookTicket from './BookTicket';
import Account from './Account';
import Signup from './Signup';
import Login from './Login';
import SearchTrains from './SearchTrains';
import Trainslist from './TrainsList';
// import { UserProvider } from "./UserContext";
// import { useUser } from './UserContext';
import UserContext from './UserContext';
import { useContext } from 'react';
// import { userInfo } from 'os';


function App() {
  const {user} = useContext(UserContext);
  // const [rerender, setRerender] = useState(false);

  console.log(user);
  return (
    <Router>
      {/* <UserContextProvider> */}
        <div className="App">
          <header>
            <h1>Train Ticket Reservation</h1>
            
            <nav>
              <ul className='left'>

                {user ? (
                  <li className='black'>Welcome, {user}</li>
                ) : (
                  <>
                    <li><Link to='/login'>Login</Link></li>
                  </>
                )

                }
              </ul>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/tickets">Tickets</Link></li>
                <li><Link to="/schedule">Schedule</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
          </header>


          <Routes>
            <Route path='/' exact element={<HomePage />} />
            <Route path="/book-tkt" element={<BookTicket />} />
            <Route path="/about" element={<Account />} />
            <Route path="/signup" element={<Signup></Signup>} />
            <Route path='/login' element={<Login />}></Route>
            <Route path='details_for_search' element={<SearchTrains />} />
            <Route path='/SearchTrains' element={<SearchTrains />}></Route>
            <Route path='/TrainsList' element={<Trainslist />}> </Route>
          </Routes>

        </div>
      {/* </UserContextProvider> */}
    </Router>
  );
}

export default App;
