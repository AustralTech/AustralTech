import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CampoFechaNacimiento = ({ onChange , icon}) => {
  const [error, setError] = useState('');
  const [valor, setValor] = useState('');

  const handleChange = (e) => {
    const inputValue = e.target.value;
    // Validación de fecha válida
    const fechaActual = new Date();
    const fechaIngresada = new Date(inputValue);
    if (fechaIngresada <= fechaActual) {
      setValor(inputValue);
      setError('');
    } else {
      setError('La fecha de nacimiento no puede ser en el futuro.');
    }
    onChange({ target: { name: 'birthDate', value: inputValue } }); // Pasamos un objeto con la propiedad name y value
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-gilroy-bold mb-2" htmlFor="fechaNacimiento">
      <FontAwesomeIcon icon={icon} className="mr-2" />
        Fecha de Nacimiento
      </label>
      <input
        className={`shadow appearance-none border ${error ? 'border-red-500' : 'border-gray-300'} rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        id="fechaNacimiento"
        type="date"
        placeholder="Fecha de Nacimiento"
        value={valor}
        onChange={handleChange}
      />
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
  );
};

export default CampoFechaNacimiento;