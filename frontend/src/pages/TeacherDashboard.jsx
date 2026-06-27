import React, { useState, useEffect } from 'react';

const TeacherDashboard = () => {
    const [students, setStudents] = useState([]);
    const [name, setName] = useState('');
    const [roll, setRoll] = useState('');

    // LocalStorage se data lana
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('students') || '[]');
        setStudents(saved);
    }, []);

    const addStudent = () => {
        const newStudent = { name, roll };
        const updated = [...students, newStudent];
        setStudents(updated);
        localStorage.setItem('students', JSON.stringify(updated));
        setName(''); setRoll('');
    };

    return (
        <div style={{ padding: '40px' }}>
            <h2>Teacher Dashboard - Manage Students</h2>
            <div style={{ marginBottom: '20px' }}>
                <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input placeholder="Roll No" value={roll} onChange={(e) => setRoll(e.target.value)} />
                <button onClick={addStudent}>Add Student</button>
            </div>
            <table border="1" style={{ width: '100%', textAlign: 'left' }}>
                <thead><tr><th>Name</th><th>Roll No</th></tr></thead>
                <tbody>
                    {students.map((s, i) => <tr key={i}><td>{s.name}</td><td>{s.roll}</td></tr>)}
                </tbody>
            </table>
        </div>
    );
};

export default TeacherDashboard;