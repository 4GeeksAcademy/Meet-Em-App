import React from 'react';
import cardImage1 from "../../img/CardImage1.png";
import cardImage2 from "../../img/CardImage2.png";
import cardImage3 from "../../img/CardImage3.png";

function LandingCards() {
  return (
    <div className="container">
      <div className="row">
      <div style={{ marginTop: '100px' }}></div>
        <div className="col-md-2"></div> {/* Blank space */}
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card bg-transparent border-0">
                <img className="card-img-top" src={cardImage1} alt="Compañeros estudiando" />
                <div className="card-body p-0">
                  <h5 className="card-title" style={{ height: '60px' }}>Encuentra compañeros de estudio</h5>
                  <p className="card-text">¿Para qué estudiar solo pudiendo hacerlo en compañía?</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card bg-transparent border-0">
                <img className="card-img-top" src={cardImage2} alt="Compañeros en un gimnasio" />
                <div className="card-body p-0">
                  <h5 className="card-title" style={{ height: '60px' }}>¿Te aterra ir solo al gimnasio?</h5>
                  <p className="card-text">¡Encuentra aquí tu próximo gym buddy!</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card bg-transparent border-0">
                <img className="card-img-top" src={cardImage3} alt="Image 3" />
                <div className="card-body p-0">
                  <h5 className="card-title" style={{ height: '60px' }}>¿Simplemente quieres compartir un café?</h5>
                  <p className="card-text">¡Encuentra un compañero para cada situación!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div> {/* Blank space */}
      </div>
    </div>
  );
}

export default LandingCards;
