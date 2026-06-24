const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'school_management_db'
});

db.connect((err) => {
    if (err) console.error("Database connection failed: " + err.stack);
    else console.log("Database Connected!");
});

// GET Students
app.get('/api/students', (req, res) => {
    db.query("SELECT * FROM students", (err, results) => {
        if (err) return res.status(500).json(err);
        return res.json(results);
    });
});

// POST Student
app.post('/api/add-student', (req, res) => {
    const { name } = req.body;
    db.query("INSERT INTO students (name) VALUES (?)", [name], (err, result) => {
        if (err) return res.status(500).json(err);
        return res.json({ message: "Added successfully" });
    });
});

app.listen(5005, () => console.log("Server running on port 5005"));