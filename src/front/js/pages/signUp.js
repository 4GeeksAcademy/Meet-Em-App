import React from "react";
import "../../styles/signUp.css";
import NavBarLandingPage from "../component/NavBarLandingPage"
import {SignUpForm} from "../component/signUpForm";


export const SignUp = () => {
	

	return (
        <div>
            <NavBarLandingPage />
            <SignUpForm/>
        </div>
	);
};
