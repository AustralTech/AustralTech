import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const CampoRepetirContrasenia = ({ onChange, contrasenia, valor, icon }) => {
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

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
    if (!valor && contrasenia) {
      //setError('Por favor, repite la contraseña.');
    } else if (valor !== contrasenia) {
      setError('Las contraseñas no coinciden.');
    } else {
      setError('');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="mb-4 relative">
      <label className="block text-gray-700 text-sm font-gilroy-bold mb-2" htmlFor="confirmPassword">
        <FontAwesomeIcon icon={icon} className="mr-2" />
        Repetir Contraseña
      </label>
      <div className="relative">
        <input
          className={`shadow appearance-none border ${error ? 'border-red-500' : 'border-gray-300'} rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          id="confirmPassword"
          type={showPassword ? 'text' : 'password'}
          placeholder="Repetir Contraseña"
          value={valor}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <button
          type="button"
          className="absolute top-1/2 right-3 transform -translate-y-1/2 focus:outline-none"
          onClick={togglePasswordVisibility}
        >
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
        </button>
      </div>
      {error && (
        <div className="absolute bg-white border border-red-500 text-red-500 px-4 py-2 rounded-md top-full mt-2 shadow">
          {error}
        </div>
      )}
    </div>
  );
};

export default CampoRepetirContrasenia;