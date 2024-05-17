import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CampoEmail = ({ onChange , icon}) => {
  const [error, setError] = useState('');
  const [touched, setTouched] = useState(false);

  const handleBlur = () => {
    setTouched(true);
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    // Validación de formato de correo electrónico estándar
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue)) {
      setError('');
    } else {
      setError('Por favor, ingresa un correo electrónico válido.');
    }
    onChange({ target: { name: 'email', value: inputValue } }); // Pasamos un objeto con la propiedad name y value
  };

  return (
    <div className="mb-4 relative">
      <label className="block text-gray-700 text-sm font-gilroy-bold mb-2" htmlFor="email">
      <FontAwesomeIcon icon={icon} className="mr-2" />
        Email
      </label>
      <input
        className={`shadow appearance-none border ${error ? 'border-red-500' : 'border-gray-300'} rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        id="email"
        type="email"
        placeholder="Email"
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

export default CampoEmail;