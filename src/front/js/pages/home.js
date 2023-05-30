import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/landing.css"
import NavBarLandingPage from "../component/NavBarLandingPage";
import Jumbotron from "../component/Jumbotron.js";
import LandingCards from "../component/LandingCards";

const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
			<p>
			</p>
			<div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div>
			<p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://start.4geeksacademy.com/starters/react-flask">
					Read documentation
				</a>
			</p>
		</div>
	);
};

export default Home