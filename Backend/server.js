const express = require('express');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const PORT = 5000;
const pool = require('./db');
const saltRounds = 20;
// const sendEmail = require('./emailService'); 

// code for sending message to the phone number
const twilio = require('twilio');

const client = twilio('userid','token')
// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.post('/send-sms', async (req, res) => {
    const { body, from, to } = req.body;
    console.log(req.body);
    console.log("hie");

    try {
      const message = await client.messages.create({
        body,
        from,
        to
      });
      console.log('Message sent successfully:', message.sid);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending message:', error);
      res.status(500).json({ error: 'Error sending message' });
    }
  });
app.use('/api', require('./routes')); // Example route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        // const query = 'SELECT COUNT(*) AS count FROM users WHERE email=$1';
        // const {rows} = await pool.query(query, [email]);
        // if (rows[0].count == 0) {
        //     return res.status(400).json({ error: 'Email not Exists' });
        // }
        
        const query1 = 'SELECT username,password FROM users WHERE email=$1';
        const Result = await pool.query(query1, [email]);
        if (Result.rows.length === 0) {
            return res.status(400).json({ error: 'Email not found' });
          }
        const psd = Result.rows[0].password;
        const p_compare = await bcrypt.compare(password,psd);
        const username = Result.rows[0].username;
        console.log(p_compare);
        console.log(psd,"is the pasword");
        if (p_compare) {
            return res.status(200).json({ message: 'User signed in successfully' , name: username});
        } else {
            return res.status(400).json({ error: 'Incorrect password' });
        }
    }
    catch(error){
        console.error('Error during login:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
    // console.log(pass, "is the password");
})
// app.post('/send-email', async (req, res) => {
//     const { email, subject, body } = req.body;
  
//     try {
//         console.log(email);
//         console.log(subject);
//         console.log(req.body);
//         if (!email) {
//             return res.status(400).json({ error: 'Recipient email address is required' });
//           }
      
//       await sendEmail(email, subject, body);
//       res.status(200).json({ message: 'Email sent successfully' });
//     } catch (error) {
//       console.error('Error sending email:', error);
//       res.status(500).json({ error: 'Failed to send email' });
//     }
//   });


app.post('/signup', async (req, res) => {

    const { username, email, password, dob, age, phone } = req.body;
    const EmailExistQuery = 'SELECT COUNT(*) AS count FROM users WHERE email=$1';
    const { rows } = await pool.query(EmailExistQuery, [email]);
    const hashedpwd = await bcrypt.hash(password,saltRounds)
    if (rows[0].count > 0) {
        return res.status(400).json({ error: 'Email already exists' });
    }

    try {
        const sql = `
            INSERT INTO users (username, email, password, dob, age, phnum)
            VALUES ($1, $2, $3, $4, $5, $6)
        `;

        await pool.query(sql, [username, email, hashedpwd, dob, age, phone]);

        res.status(200).json({ message: 'User signed up successfully' });
    } catch (error) {
        console.error('Error signing up user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})
app.post('/generate_price', async (req,res)=>{
    const {source,dest } = req.body;
    // res.send(req.body);
    try {
        const query = 'SELECT distance FROM distances WHERE source_stop = $1 AND destination = $2';
        const {rows} = await pool.query(query, [source,dest]);

        if (!rows[0].distance) {
            return res.status(400).json({ error: 'Those source and destination does not Exists' });
        }
        else{
            distance = rows[0].distance;
            return res.status(200).json({message:distance})
        }
        
        
        // const p_compare = await bcrypt.compare(password,psd);
        // console.log(p_compare);
        // console.log(psd,"is the pasword");
        // if (p_compare) {
        //     return res.status(200).json({ message: 'User signed in successfully' });
        // } else {
        //     return res.status(400).json({ error: 'Incorrect password' });
        // }
    }
    catch(error){
        console.error('Error during fetching data:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
    
    // res.status("hieee")
})

app.get('/signup', (req, res) => {
    res.send("Hellooo....")
})

app.get('/send-sms', (req, res) => {
    res.send("Hellooo....")
})


app.get('/generate_price', (req, res) => {
    res.send("Hellooo....")
})

app.listen(PORT, () => {
    console.log("listening");
})


// Start server
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
