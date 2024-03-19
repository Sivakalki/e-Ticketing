const express = require('express');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const PORT = 5000;
const pool = require('./db');
const saltRounds = 20;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api', require('./routes')); // Example route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const query = 'SELECT COUNT(*) AS count FROM users WHERE email=$1';
        const {rows} = await pool.query(query, [email]);
        if (rows[0].count == 0) {
            return res.status(400).json({ error: 'Email not Exists' });
        }
        
        const query1 = 'SELECT password FROM users WHERE email=$1';
        const pwdResult = await pool.query(query1, [email]);
        const psd = pwdResult.rows[0].password;
        const p_compare = await bcrypt.compare(password,psd);
        console.log(p_compare);
        console.log(psd,"is the pasword");
        if (p_compare) {
            return res.status(200).json({ message: 'User signed in successfully' });
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

app.get('/signup', (req, res) => {
    res.send("Hellooo....")
})

app.listen(PORT, () => {
    console.log("listening");
})

// Start server
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
