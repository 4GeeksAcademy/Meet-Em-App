import React, { useState } from "react";


export const SignUpForm = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [disableSignUp, setDisableSignUp] = useState(true);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrorMessage(""); // Clear error message on password change
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setErrorMessage(""); // Clear error message on confirm password change
  };

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      // Passwords match
      // Proceed with signup logic
      console.log("Contraseña válida");
    } else {
      // Passwords don't match
      setErrorMessage("Passwords do not match");
    }
  };

  // Enable or disable the sign-up button based on password matching
  React.useEffect(() => {
    setDisableSignUp(password !== confirmPassword);
  }, [password, confirmPassword]);


    return (
        <div className="container-signUp">
        <form className="form-signUp" onSubmit={handleSubmit}>
                <div className="col-md-12">
                    <label htmlFor="inputUserName" className="form-label">
                        Username
                    </label>
                    <input type="username" className="form-control" id="inputUserName" />
                </div>
                <div className="col-md-12">
                    <label htmlFor="inputState" className="form-label">
                        Interest
                    </label>
                    <select id="inputState" className="form-select">
                        <option selected="">Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">
                        Address
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputAddress"
                        placeholder="1234 Main St"
                    />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">
                        Address 2
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputAddress2"
                        placeholder="Apartment, studio, or floor"
                    />
                </div>
                <div className="col-md-12">
                    <label htmlFor="inputState" className="form-label">
                        Country
                    </label>
                    <select id="inputState" className="form-select">
                        <option selected="">Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="col-md-12">
                    <label htmlFor="inputCity" className="form-label">
                        City
                    </label>
                    <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="col-md-12">
                    <label htmlFor="inputEmail" className="form-label">
                        Email
                    </label>
                    <input type="email" className="form-control" id="inputEmail" />
                </div>
                <div className="col-md-12">
                    <label htmlFor="inputPassword" className="form-label">
                        Password
                    </label>
                    <div className="password-input">
                        <input
                            type={showPassword ? "text" : "password"}
                            className="form-control"
                            id="inputPassword"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                </div>
                <div className="col-md-12">
                    <label htmlFor="inputConfirmPassword" className="form-label">
                        Confirm Password
                    </label>
                    <div className="password-input">
                        <input
                            type={showPassword ? "text" : "password"}
                            className="form-control"
                            id="inputConfirmPassword"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                        />
                        <i
                            className={`password-icon fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"
                                }`}
                            onClick={handlePasswordVisibility}
                        ></i>
                    </div>
                    {errorMessage && (
                        <div className="alert alert-danger mt-3" role="alert">
                            {errorMessage}
                        </div>
                    )}
                </div>
                <div className="col-12">
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={disableSignUp}
                    >
                        Sign up
                    </button>
                </div>
            </form>
        </div>
    );
};
