import React, { useState } from "react"
import countries from "countries-list";
import { Link } from "react-router-dom";


export const SignUpFormNation = () => {

    const nationalityList = Object.values(countries.countries).map((country) => country.name);

    const [selectedNationality, setSelectedNationality] = useState("");
    const handleNationalitySelection = (nationality) => {
        setSelectedNationality(nationality);
    };
    const isFormValid = selectedNationality !== "";





    return (
        <div className="container col-4 bg-light mt-5" >
            <style>
                {`
                .nation:hover {
                    cursor: pointer;
                }
                `}
            </style>
            <form className="row">
                <div className="col-md-12 d-flex justify-content-center mt-3">
                    <h2>¿Y tú, de quién eres?</h2>
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
                            {selectedNationality ? selectedNationality : "Nacionalidad"}
                        </button>

                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            {nationalityList.map((nationality, index) => (
                                <li key={index} className="nation ms-4" onClick={() => handleNationalitySelection(nationality)}>
                                    {nationality}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="col-md-12 mt-5">


                    <Link to={isFormValid ? "/loginFormPostalCode" : "#"}>
                        <button type="submit" disabled={!isFormValid} className="btn btn-primary mb-3 col-12 btn-lg">
                            Continue
                        </button>
                    </Link>

                </div>
            </form>
        </div>


    );
};

