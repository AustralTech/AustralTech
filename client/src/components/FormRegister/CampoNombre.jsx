import React from 'react';

const CampoNombre = ({ onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-gilroy-bold mb-2">
        Nombre
      </label>
      <input
        required
        type="text"
        name="nombre"
        className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Nombre"
        onChange={onChange} // Agrego el onChange handler como una prop
      />
    </div>
  );
};

export default CampoNombre;