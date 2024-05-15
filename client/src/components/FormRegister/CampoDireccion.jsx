// CampoDireccion.js
import React, { useState } from 'react';

const CampoDireccion = ({ onChange }) => {
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    // Verificar la longitud de la dirección
    if (value.length <= 100) {
      setError('');
    } else {
      setError('La dirección no puede tener más de 100 caracteres.');
    }
    onChange({ target: { name: 'address', value } }); // Pasamos un objeto con la propiedad name y value
  };

  return (
    <div className="mb-4">
      <label htmlFor="direccion" className="block text-gray-700 text-sm font-gilroy-bold mb-2">
        Dirección:
      </label>
      <input
        type="text"
        id="direccion"
        className={`border rounded-full w-full px-2 py-1 focus:outline-none ${error ? 'border-red-500' : 'border-gray-300'}`}
        onChange={handleChange}
        placeholder='Direccion'
      />
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
  );
};

export default CampoDireccion;