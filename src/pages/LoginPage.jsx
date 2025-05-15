import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/LoginPage.css';

function LoginPage() {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login submitted:', { email, password });
        // Navigate to WelcomePage with email state
        navigate('/dashboard', { state: { email } });
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-title">LOGIN</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">LOGIN</button>
                </form>
                <div className="register-prompt">
                    <p>Don't have an account?</p>
                    <Link to="/register" className="register-button">REGISTER</Link>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;