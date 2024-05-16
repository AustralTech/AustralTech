import React, { useState } from 'react';

const CampoContrasenia = ({ onChange }) => {
  const [error, setError] = useState('');
  const [touched, setTouched] = useState(false);

  const handleBlur = () => {
    setTouched(true);
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    // Validación de longitud mínima y máxima de caracteres
    if (inputValue.length >= 8 && inputValue.length <= 20) {
      setError('');
    } else {
      setError('La contraseña debe tener entre 8 y 20 caracteres.');
    }
    onChange({ target: { name: 'password', value: inputValue } }); // Pasamos el valor de la contraseña como argumento
  };

  return (
    <div className="mb-4 relative">
      <label className="block text-gray-700 text-sm font-gilroy-bold mb-2" htmlFor="password">
        Contraseña
      </label>
      <input
        className={`shadow appearance-none border ${error ? 'border-red-500' : 'border-gray-300'} rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        id="password"
        type="password"
        placeholder="Contraseña"
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched && error && (
        <div className="absolute bg-white border border-red-500 text-red-500 px-4 py-2 rounded-md top-full mt-2 shadow">
          {error}
        </div>
      )}
    </div>
  );
};

export default CampoContrasenia;