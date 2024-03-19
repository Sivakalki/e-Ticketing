// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Home';
import BookTicket from './BookTicket';
import Account from './Account';
import Signup from './Signup';
import Login from './Login';
function App() {
  return (
    <Router>
      <div className="App">
        <div className="main">
          <Link to=''>Home Page</Link>
        </div>
        <div className='Account_details'>
          <Link to='/about'>Account details</Link>
        </div>
        <div>
          <Link to='/login'>Login here</Link>
        </div>
        <Routes>
          <Route path='/' exact element={<HomePage />} />
          <Route path="/book-tkt" element={<BookTicket />} />
          <Route path="/about" element={<Account />} />
          <Route path="/signup" element={<Signup></Signup>} />
          <Route path='/login' element={<Login />}></Route>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
