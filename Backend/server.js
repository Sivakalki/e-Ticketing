const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api', require('./routes')); // Example route

app.post('/signup',async (req,res) =>{
    const { username, email, password, dob, age, phone } = req.body;

    try {
        const sql = `
            INSERT INTO users (username, email, password, dob, age, phone)
            VALUES ($1, $2, $3, $4, $5, $6)
        `;
        
        await pool.query(sql, [username, email, password, dob, age, phone]);

        res.status(200).json({ message: 'User signed up successfully' });
    } catch (error) {
        console.error('Error signing up user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

app.get('/signup',(req,res)=>{
    res.send("Hellooo....")
})

app.listen(PORT,()=>{
    console.log("listening")
})

// Start server
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
