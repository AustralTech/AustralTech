import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button'; // Asegúrate de que la ruta sea correcta

const HomeTurn = () => {
  return (
    <div className="relative max-w-7xl mx-auto p-6 flex items-center"> 
      <div className="w-3/4 text-black mr-6"> 
        <h2 className="text-3xl font-bold mb-4 flex items-center">
          <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
          Saca tu turno fácilmente
        </h2>
        <p className="text-lg mb-4">
          En nuestro hospital, puedes sacar un turno de manera rápida y sencilla desde la comodidad de tu hogar.
        </p>
        <h3 className="text-2xl font-semibold mb-2">Los mejores especialistas</h3>
        <p className="text-gray-700 mb-4">
          Contamos con un equipo de profesionales altamente calificados y dedicados a brindarte la mejor atención médica.
        </p>
        <blockquote className="italic text-gray-500 mb-4">
          "La medicina es la ciencia de la incertidumbre y el arte de la probabilidad." - William Osler
        </blockquote>
        <Button
          type="button"
          title="Saca un turno"
          variant="btn_blue"
        />
      </div>
      <div className="relative w-1/4"> 
        <img 
          src="/images/fototurn.jpg" 
          alt="Hospital" 
          className="rounded-lg object-cover md:w-200px md:h-280px sm:w-150px sm:h-220px xs:w-100px xs:h-150px" 
          style={{
            width: '250px',
            height: '350px',
          }} 
        />
      </div>
    </div>
  );
};

export default HomeTurn;