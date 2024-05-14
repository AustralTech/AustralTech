import React, { useState } from 'react';

const CampoTelefono = ({ valor, onChange }) => {
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const inputValue = e.target.value;
    // Validación de solo dígitos y longitud máxima
    if (/^\d{0,15}$/.test(inputValue)) {
      onChange && onChange(e); // Pasamos el evento completo
      setError('');
    } else {
      setError('El teléfono debe contener solo dígitos y tener una longitud máxima de 15 caracteres.');
    }
  };

  return (
    <div className="mb-4 w-full relative">
      <label className="block text-gray-700 text-sm font-gilroy-bold mb-2" htmlFor="telefono">
        Teléfono
      </label>
      <input
        className={`shadow appearance-none border ${error ? 'border-red-500' : 'border-gray-300'} rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        id="telefono"
        type="tel"
        name="telefono" // Añadimos el nombre del campo
        placeholder="Teléfono"
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

export default CampoTelefono;
