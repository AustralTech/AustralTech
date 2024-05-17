// CampoApellido.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const CampoApellido = ({ onChange, icon }) => {
  return (
    <div className="mb-6">
        <label className="block text-gray-700 text-sm font-gilroy-bold mb-2">
        <FontAwesomeIcon icon={icon} className="mr-2" />
          Apellido
        </label>
        <input
          required
          type="text"
          name="lastName"
          pattern="[a-zA-Z]+"
          minLength="2"
          maxLength="50"
          className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-gilroy"
          placeholder="Apellido"
          onChange={onChange}
        />
    </div>
  );
};

export default CampoApellido;