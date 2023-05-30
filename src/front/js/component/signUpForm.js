import React, { useState } from 'react';
import { Link } from "react-router-dom";

export function SignUpForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password === confirmPassword) {
            // Passwords match, proceed with form submission
            // Add your logic here

            // Reset the form fields
            setUsername('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        } else {
            // Passwords don't match, display an error message and reset confirm password field
            setPasswordMatch(false);
            setConfirmPassword('');
            
        }
    };

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const isFormValid = username.trim() !== '' && email.trim() !== '' && password.trim() !== '' && confirmPassword.trim() !== '' && password === confirmPassword;


    return (
        <div className="container col-4 bg-light mt-5">
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-12">
                    <div className="d-flex justify-content-center mt-3"><h1>Join ?????</h1></div>
                    <div className="d-flex justify-content-center"><h4>Post events and make new friends</h4></div>
                </div>
                <div className="col-md-12">
                    <label htmlFor="inputUsername" className="form-label">
                        Username
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputUsername"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="col-md-12">
                    <label htmlFor="inputEmail4" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="inputEmail4"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="col-md-12">
                    <label htmlFor="inputPassword4" className="form-label">
                        Create Password
                    </label>
                    <input
                        type={showPassword ? "text" : "password"}
                        className="form-control"
                        id="inputPassword4"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="col-md-12">
                    <label htmlFor="inputConfirmPassword4" className="form-label">
                        Confirm Password
                    </label>
                    <input
                        type={showPassword ? "text" : "password"}
                        className={`form-control ${!passwordMatch ? 'is-invalid' : ''}`}
                        id="inputConfirmPassword4"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {!passwordMatch && <div className="invalid-feedback">Passwords do not match.</div>}
                </div>
                <div className="col-12">
                    <div className="show-password">
                        <input
                            className="show-password-check"
                            type="checkbox"
                            id="show-password-check"
                            checked={showPassword}
                            onChange={handleShowPassword}
                        />
                        <label className="show-password-label ms-2" htmlFor="show-password-check"> Show password
                        </label>
                    </div>
                </div>
                <div className="col-md-12">
                    <Link to={isFormValid ? "/loginFormBirthDate" : "#"}>
                        <button type="submit" disabled={!isFormValid} className="btn btn-primary mb-3 col-12">
                            Sign up
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    );
}




