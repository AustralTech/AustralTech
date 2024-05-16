import React, { useState } from 'react';

const CampoRepetirContrasenia = ({ onChange, contrasenia, valor }) => {
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue === contrasenia) {
      onChange({ target: { name: 'repetirContrasenia', value: inputValue } }); // Actualizamos el estado formData con el valor de repetirContrasenia
      setError('');
    } else {
      setError('Las contraseñas no coinciden.');
    }
  };

  const handleBlur = () => {
    // Validación de campo vacío
    if (!valor) {
      setError('Por favor, repite la contraseña.');
    }
  };

  return (
    <div className="mb-4 relative">
      <label className="block text-gray-700 text-sm font-gilroy-bold mb-2" htmlFor="confirmPassword">
        Repetir Contraseña
      </label>
      <input
        className={`shadow appearance-none border ${error ? 'border-red-500' : 'border-gray-300'} rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        id="confirmPassword"
        type="password"
        placeholder="Repetir Contraseña"
        value={valor}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error && (
        <div className="absolute bg-white border border-red-500 text-red-500 px-4 py-2 rounded-md top-full mt-2 shadow">
          {error}
        </div>
      )}
    </div>
  );
};

export default CampoRepetirContrasenia;