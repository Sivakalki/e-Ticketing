import React, { useState, useEffect } from 'react';
import './SearchTrains.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function SearchTrains() {
  const [details, setDetails] = useState({
    source: '',
    dest: '',
    // email:'',
    Phone_num:''
,  });
  const [train_details, setTD] = useState({
    train_type: '',
    coach_type: ''
  })

  const train_detiails_change = (e) => {
    setTD({ ...train_details, [e.target.name]: e.target.value });
    setRerender(prev => !prev);
  }
  const [rerender, setRerender] = useState(false);
  const today = new Date().toISOString().split('T')[0];
  const [price, setPrice] = useState(0)
  const [err, seterr] = useState('');
  const generateFine = async (e) => {
    console.log(details);
    setPrice(20);
    try {
      const response = await axios.post('http://localhost:5000/generate_price', details);
      var val = response.data.message;

      console.log(val);

      if (train_details.train_type === 'SF') {
        val = val * 5;
      }
      else if (train_details.train_type === 'EXP') {
        val *= 3;
      }
      else if (train_details.train_type === 'PNG') {
        val *= 2;
      }
      else if (train_details.train_type === 'VB') {
        val *= 10;
      }

      if (train_details.coach_type === 'AC3') {
        val *= 10;
      }
      else if (train_details.coach_type === 'AC1') {
        val *= 20;
      }
      else if (train_details.coach_type === 'AC2') {
        val *= 15;
      }
      else if (train_details.coach_type === 'SL') {
        val *= 8;
      }
      else if (train_details.coach_type === 'SS') {
        val *= 5;
      }

      setPrice(val);
      console.log(val, "is the total price");
    }
    catch (error) {
      console.error("error:", error.response.data.error);
      if (error.response && error.response.data && error.response.data.error) {
        seterr(error.response.data.error);
      }
      else {
        seterr('there is error in the data');
      }
    }
  }
  const detailsChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  }
  const sendmessage =async(e) =>{
    try {
      const response = await axios.post('http://localhost:5000/send-sms', {
        body: 'Your ticket has been successfully booked. Your booking ID is: XXXXXX',
        from: '+12513024135',
        to: details.Phone_num
      });
      console.log('Message sent successfully');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(details.email)
    // // You can handle form submission here, like calling an API to search for trains
    // try {
    //   const response = await axios.post('http://localhost:5000/send-email', {
    //     email: details.email,
    //     subject: 'your Ticket booking',
    //     body: 'Your ticket has been successfully booked. Your booking ID is: 123456',
    //   });
    //   console.log('Message sent successfully');
    // } catch (error) {
    //   console.error('Error sending message:', error);
    // }
  // console.log('Message sent successfully:', message.sid);
  };

  return (
    <div className='objects'>
      <h1>Generate Ticket</h1>
      <form method='post' onSubmit={handleSubmit}>
        <label htmlFor="source">Source Area:</label>
        <input
          type="text"
          id="source"
          name="source"
          value={details.source}
          onChange={detailsChange}
          required
        /><br /><br />

        <label htmlFor="destination">Destination Area:</label>
        <input
          type="text"
          id="destination"
          name="dest"
          value={details.dest}
          onChange={detailsChange}
          required
        /><br /><br />

        {/* <label htmlFor="date">Date:</label>
        <input 
          type="date" 
          id="date" 
          name="date" 
          min={today}
          value={details.date} 
          onChange={detailsChange} 
          required 
        /> */}
        {/* <br/><br/> */}
        <label htmlFor="date">Select Train Type:</label>
        <select id="TrainType" name='train_type' onChange={train_detiails_change}>
          <option value="">Select...</option>
          <option value="SF">SuperFast Express</option>
          <option value="EXP">Express</option>
          <option value="PNG">Passenger</option>
          <option value="VB">Vande Bharath</option>
          {/* Add more options as needed */}
        </select>

        <br /><br />
        <label htmlFor="date">Select Coach Type:</label>
        <select id="CoachType" name='coach_type' onChange={train_detiails_change}>
          <option value="">Select...</option>
          <option value="AC1">AC FIRST CLASS</option>
          <option value="AC2">AC SECOND CLASS</option>
          <option value="AC3">AC 3-TIER</option>
          <option value="SL">SLEEPER</option>
          <option value="ST">SITTING</option>
          {/* Add more options as needed */}
        </select>
        <br /><br />

        {/* <label htmlFor="email">email of passenger:</label>
        <input
          type="text"
          id ="email"
          name="email"
          value={details.email}
          onChange={detailsChange}
          required
        /><br /><br /> */}
        <label htmlFor="Phone_num">Phone_num of passenger:</label>
        <input
          type="text"
          id ="Phone_num"
          name="Phone_num"
          value={details.Phone_num}
          onChange={detailsChange}
          required
        /><br /><br />

        <div className="generateFyn">
          <button onClick={generateFine}>Generate Fine</button>
          <input type="number"
            value={price}
          />
        </div>
        <Link to="/TrainsList"><button className='booktkt' onClick={sendmessage} type="submit">Book Ticket</button></Link>
      </form>

    </div>
  );
}

export default SearchTrains;
