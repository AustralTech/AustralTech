import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const CampoContrasenia = ({ onChange, icon }) => {
  const [error, setError] = useState('');
  const [touched, setTouched] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="mb-4 relative">
      <label className="block text-gray-700 text-sm font-gilroy-bold mb-2" htmlFor="password">
        <FontAwesomeIcon icon={icon} className="mr-2" />
        Contraseña
      </label>
      <div className="relative">
        <input
          className={`shadow appearance-none border ${error ? 'border-red-500' : 'border-gray-300'} rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          id="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Contraseña"
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
      {touched && error && (
        <div className="absolute bg-white border border-red-500 text-red-500 px-4 py-2 rounded-md top-full mt-2 shadow">
          {error}
        </div>
      )}
    </div>
  );
};

export default CampoContrasenia;