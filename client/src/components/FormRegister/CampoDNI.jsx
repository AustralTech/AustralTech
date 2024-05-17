import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CampoDNI = ({ valor, onChange , icon}) => {
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const inputValue = e.target.value;
    // Validación de exactamente 8 dígitos numéricos
    if (/^\d{8}$/.test(inputValue)) {
      onChange && onChange(e); // Aquí pasamos el evento completo
      setError('');
    } else if (inputValue === '') { // Si el campo está vacío, borra el error
      setError(''); // Devuelve el estado error a su valor original
    } else {
      setError('El DNI debe contener exactamente 8 dígitos numéricos.');
    }
  };

  return (
    <div className="mb-4 relative">
      <label className="block text-gray-700 text-sm font-gilroy-bold mb-2" htmlFor="dni">
      <FontAwesomeIcon icon={icon} className="mr-2" />
        DNI
      </label>
      <input
        className={`shadow appearance-none border ${error ? 'border-red-500' : 'border-gray-300'} rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        id="dni"
        type="text"
        name="dni" // Añadimos el nombre del campo
        placeholder="DNI"
        value={valor}
        onChange={handleChange}
        style={{ height: '2.5rem' }}
      />
      {error && (
        <div className="absolute bg-white border border-red-500 text-red-500 px-4 py-2 rounded-md top-full mt-2 shadow">
          {error}
        </div>
      )}
    </div>
  );
};

export default CampoDNI;
