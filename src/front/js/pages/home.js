import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/landing.css"
import NavBarLandingPage from "../component/NavBarLandingPage";
import Jumbotron from "../component/Jumbotron.js";
import LandingCards from "../component/LandingCards";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
        <div>
        </div>
	);
};
