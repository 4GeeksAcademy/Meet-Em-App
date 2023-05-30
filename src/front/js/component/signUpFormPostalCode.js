import React from "react";



export const SignUpFormPostalCode = () => {

    return (

        <div className="container col-4 bg-light mt-5" >
            <form className="row">
                <div className="col-md-12 d-flex justify-content-center mt-3">
                    <h2>¿Y cuál es tu código postal?</h2>
                </div>
                <div className="col-md-12 mt-5">
                    <label htmlFor="inputZip" className="form-label"></label>
                    <input type="text" className="form-control" id="inputZip" placeholder="Código Postal"required/>
                </div>
                <div className="col-md-12 mt-5">
                    <button type="submit" className="btn btn-primary mb-3 col-12 btn-lg">
                        Continue
                    </button>
                </div>
            </form>
        </div>

    );
};