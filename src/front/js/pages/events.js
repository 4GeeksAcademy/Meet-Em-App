import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../pages/events.css";
import { Navbar } from "../component/navbar";
import EventHeader from "../component/EventHeader";
import EventViewCards from "../component/EventViewCards";
import CalendarComponent from "../component/CalendarComponent";
import LandingPageBackGround from "../../img/LandingPageBackGround.png"

export const Events = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="auth-page" style={{ backgroundImage: `url(${LandingPageBackGround})`, backgroundColor: '#cccccc' }}>
            <Navbar />
            <EventHeader />
            <div className="row">
                <CalendarComponent /> {/* Replace the existing col-2 with the CalendarComponent component */}
                <div className="col-8">
                    <EventViewCards />
                </div>
            </div>
        </div>
    );
};
