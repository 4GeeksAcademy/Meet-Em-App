import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/landing.css"
import NavBarLandingPage from "../component/NavBarLandingPage";
import Jumbotron from "../component/Jumbotron.js";
import LandingCards from "../component/LandingCards";
import HowWeWork from "../component/howItWorks";
import LandingPageBackGround from "../../img/LandingPageBackGround.png"

export const Landing = () => {
	const { store, actions } = useContext(Context);

	return (
        <div className="auth-page" style={{backgroundImage: `url(${LandingPageBackGround})` , backgroundColor: '#cccccc'}}>
            <NavBarLandingPage />
            <Jumbotron />
            <LandingCards/>
        </div>
	);
};
