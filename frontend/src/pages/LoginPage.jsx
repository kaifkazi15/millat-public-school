import React, { useState } from 'react';

const LoginPage = () => {
    const [pwd, setPwd] = useState('');
    const handleLogin = () => {
        if (pwd === 'admin123') {
            localStorage.setItem('auth', 'true');
            window.location.href = "/teacher-dashboard";
        } else {
            alert('Wrong Password!');
        }
    };
    return (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <h1>Staff Login</h1>
            <input type="password" onChange={(e) => setPwd(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            <br/><br/>
            <button onClick={() => window.location.href = "/"}>Back to Home</button>
        </div>
    );
};
export default LoginPage;