import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const LoginFormBirthDate = () => {

    const [years, setYears] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState("");
    const [selectedYear, setSelectedYear] = useState("");

    useEffect(() => {
        const currentYear = new Date().getFullYear();
        const last90Years = [];
        for (let i = currentYear; i >= currentYear - 90; i--) {
            last90Years.push(i);
        }
        setYears(last90Years);
    }, []);

    const handleMonthSelection = (month) => {
        setSelectedMonth(month);
    };

    const handleYearSelection = (year) => {
        setSelectedYear(year);
    };

    const isFormValid = selectedMonth !== "" && selectedYear !== "";

    return (
        <div className="container col-4 bg-light mt-5">
            <style>
                {`
                .month:hover {
                    cursor: pointer;
                }
                `}
            </style>
            <form className="row g-3">
                <div className="col-md-12 d-flex justify-content-center mt-3">
                    <h2>¿Cuándo naciste?</h2>
                </div>
                <div className="col-md-12 d-flex justify-content-center mt-5">
                    <div className="dropdown me-3">
                        <button
                            className="btn btn-secondary dropdown-toggle btn-lg"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            {selectedMonth ? selectedMonth : "Month"}
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li className="month ms-4" onClick={() => handleMonthSelection("Enero")}>
                                Enero
                            </li>
                            <li className="month ms-4" onClick={() => handleMonthSelection("Febrero")}>
                                Febrero
                            </li>
                            <li className="month ms-4" onClick={() => handleMonthSelection("Marzo")}>
                                Marzo
                            </li>
                            <li className="month ms-4" onClick={() => handleMonthSelection("Abril")}>
                                Abril
                            </li>
                            <li className="month ms-4" onClick={() => handleMonthSelection("Mayo")}>
                                Mayo
                            </li>
                            <li className="month ms-4" onClick={() => handleMonthSelection("Junio")}>
                                Junio
                            </li>
                            <li className="month ms-4" onClick={() => handleMonthSelection("Julio")}>
                                Julio
                            </li>
                            <li className="month ms-4" onClick={() => handleMonthSelection("Agosto")}>
                                Agosto
                            </li>
                            <li className="month ms-4" onClick={() => handleMonthSelection("Septiembre")}>
                                Septiembre
                            </li>
                            <li className="month ms-4" onClick={() => handleMonthSelection("Octubre")}>
                                Octubre
                            </li>
                            <li className="month ms-4" onClick={() => handleMonthSelection("Noviembre")}>
                                Noviembre
                            </li>
                            <li className="month ms-4" onClick={() => handleMonthSelection("Diciembre")}>
                                Diciembre
                            </li>
                        </ul>
                    </div>

                    <div className="dropdown">
                        <button
                            className="btn btn-secondary dropdown-toggle btn-lg"
                            type="button"
                            id="dropdownMenuButton2"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            {selectedYear ? selectedYear : "Year"}
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                            {years.map((year, index) => (
                                <li key={index} onClick={() => handleYearSelection(year)}>
                                    <a className="dropdown-item" href="#">
                                        {year}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="col-md-12 mt-5">
                <Link to={isFormValid ? "/loginFormNation" : "#"}>
                    <button type="submit" disabled={!isFormValid} className="btn btn-primary mb-3 col-12 btn-lg">
                        Continue
                    </button>
                </Link>
                </div>
            </form>

        </div>
    );
};
