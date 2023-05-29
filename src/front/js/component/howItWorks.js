import React from "react";
import cardImage1 from "../../img/CardImage1.png";

function HowWeWork() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <h1>Pasos a seguir en Meet Em App!</h1>
          <p>¡Encuentra compañía para todas tus actividades! Desde sacar al perro a ir a un concierto ¡Siempre habrá alguien para ti!</p>
          <div className="image-container row">
            <div className="col-md-4">
              <img
                src={cardImage1}
                alt="Image 1"
                style={{ width: "270px", height: "155px" }}
              />
              <p>Image 1 caption</p>
            </div>
            <div className="col-md-4">
              <img
                src={cardImage1}
                alt="Image 2"
                style={{ width: "270px", height: "155px" }}
              />
              <p>Image 2 caption</p>
            </div>
            <div className="col-md-4">
              <img
                src={cardImage1}
                alt="Image 3"
                style={{ width: "270px", height: "155px" }}
              />
              <p>Image 3 caption</p>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
}

export default HowWeWork;
