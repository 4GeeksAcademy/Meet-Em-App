import React from 'react';
import { Link } from 'react-router-dom';

const EventHeader = () => {
  const loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

  return (
    <div className="container">
      <div className="row">
        <div className="col"></div>
        <div className="col-8">
          <h1>¡Hola (User)! </h1>
          <h5>¡Estos son los eventos más próximos!</h5>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default EventHeader;

