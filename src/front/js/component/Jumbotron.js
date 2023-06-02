import React from 'react';
import JumbotronImage from '../../img/JumbotronImage.png';
import { Link } from 'react-router-dom';

function Jumbotron() {
  return (
    <div className="w-full relative mt-5 mb-16 sm:mt-24">
      <div className="mt-20"></div>
      <div className="mt-20"></div>
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-4 mb-6">
          <div className="row">
            <div className="col-lg-9 m-2">
              <h1>¡Encontrar compañía nunca fue tan fácil!</h1>
              <p>
                Sean cuales sean que tus planes, intereses u objetivos aquí podrás encontrar desde tu siguiente Gym Buddy, a un compañero de estudios o incluso simplemente alguien
                con quien jugar a la consola! Unete a una comunidad donde encontrar acompañante para cada uno de tus planes!
              </p>
              <Link to="/demo" className="btn btn-primary">Unirse a Meet Em App!</Link>
            </div>
            <div className="col-lg-1">
            <img src={JumbotronImage} alt="People Meeting" />
            </div>
          </div>
        </div>
        <div className="col-lg-4"></div>
      </div>
      <div className="mt-20"></div>
      <div className="mt-20"></div>
    </div>
  );
}

export default Jumbotron;
