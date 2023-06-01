import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/landing.css"
import Jumbotron from "../component/Jumbotron.js";
import LandingCards from "../component/LandingCards";
import { Navbar } from "../component/navbar";
import EventHeader from "../component/EventHeader";

export const Events = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="auth-page" style={{ backgroundColor: '#FFFFFF' }}>
            <Navbar />
            <EventHeader />
        </div>
    );
};
