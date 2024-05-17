import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CampoNombre = ({ onChange , icon }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-gilroy-bold mb-2">
      <FontAwesomeIcon icon={icon} className="mr-2" />
        Nombre
      </label>
      <input
        required
        type="text"
        name="firstName"
        className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Nombre"
        onChange={onChange} // Agrego el onChange handler como una prop
      />
    </div>
  );
};

export default CampoNombre;