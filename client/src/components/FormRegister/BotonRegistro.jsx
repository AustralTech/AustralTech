import React from 'react';

const FlechaDerecha = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-9">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
};


const BotonRegistro = ({ texto }) => {
  return (
    <button
      className="bg-gradient-to-r from-customblue to-customblue-lighter hover:to-customblue text-white font-gilroy-bold py-2 px-4 rounded-md shadow-md transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-customblue focus:ring-offset-white flex items-center bg-blue-500"
      type="submit"
    >
      <span className="mr-1">{texto}</span>
      <FlechaDerecha />
    </button>
  );
};

export default BotonRegistro;
