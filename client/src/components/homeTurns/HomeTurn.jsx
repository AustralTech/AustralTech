import React from 'react';
// import exampleImage from '../assets/example-image.jpg'; // Asegúrate de tener una imagen en esta ruta
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const HomeTurn = () => {
  return (
    <div className="relative max-w-4xl mx-auto bg-white rounded-lg shadow-2xl p-6 flex items-center transform hover:scale-105 transition duration-500">
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
        <a 
          href="/sacar-turno" 
          className="bg-blue-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 inline-block font-semibold">
          Sacar Turno
        </a>
      </div>
      <div className="relative w-1/4">
  <img 
    src="/images/fototurn.jpg" 
    alt="Hospital" 
    className="absolute -right-12 -bottom-40 rounded-lg object-cover shadow-lg" 
    style={{ width: '250px', height: '350px' }} 
  />
</div>

    </div>
  );
};

export default HomeTurn;
