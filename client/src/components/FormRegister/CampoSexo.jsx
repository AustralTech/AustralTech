import React, { useState } from 'react';

const CampoSexo = ({ onChange }) => {
  const [error, setError] = useState('');
  const [valor, setValor] = useState('');

  const handleChange = (e) => {
    const inputValue = e.target.value;
    // Validación de selección obligatoria
    if (inputValue !== '') {
      setValor(inputValue);
      setError('');
    } else {
      setError('Por favor, selecciona tu sexo.');
    }
    onChange({ target: { name: 'sexo', value: inputValue } }); // Pasamos un objeto con la propiedad name y value
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-gilroy-bold mb-2" htmlFor="sexo">
        Sexo
      </label>
      <select
        className={`shadow appearance-none border ${error ? 'border-red-500' : 'border-gray-300'} rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        id="sexo"
        value={valor}
        onChange={handleChange}
      >
        <option value="">Seleccionar</option>
        <option value="masculino">Masculino</option>
        <option value="femenino">Femenino</option>
        <option value="otro">Otro</option>
      </select>
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
  );
};

export default CampoSexo;