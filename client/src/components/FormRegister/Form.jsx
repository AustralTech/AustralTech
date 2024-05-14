"use client"
import React, { useState } from 'react';
import CampoNombre from './CampoNombre';
import CampoApellido from './CampoApellido';
import CampoDNI from './CampoDNI';
import CampoDireccion from './CampoDireccion';
import CampoTelefono from './CampoTelefono';
import CampoEmail from './CampoEmail';
import CampoSexo from './CampoSexo';
import CampoFechaNacimiento from './CampoFechaNacimiento';
import CampoContrasenia from './CampoContrasenia';
import CampoRepetirContrasenia from './CampoRepetirContrasenia';
import BotonRegistro from './BotonRegistro';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    dni: '',
    direccion: '',
    telefono: '',
    email: '',
    sexo: '',
    fechaNacimiento: '',
    contrasenia: '',
    repetirContrasenia: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const isValidForm = () => {
    const { nombre, apellido, dni, direccion, telefono, email, sexo, fechaNacimiento, contrasenia, repetirContrasenia } = formData;

    // Validación de cada campo
    const isValidNombre = nombre.trim() !== '';
    const isValidApellido = apellido.trim() !== '';
    const isValidDNI = dni.trim() !== '';
    const isValidDireccion = direccion.trim() !== '';
    const isValidTelefono = telefono.trim() !== '';
    const isValidEmail = email.trim() !== '';
    const isValidSexo = sexo.trim() !== '';
    const isValidFechaNacimiento = fechaNacimiento.trim() !== '';
    const isValidContrasenia = contrasenia.trim() !== '' && contrasenia === repetirContrasenia;

    // Si todos los campos son válidos, devuelve true
    return (isValidNombre && isValidApellido && isValidDNI && isValidDireccion && isValidTelefono && isValidEmail && isValidSexo && isValidFechaNacimiento && isValidContrasenia);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidForm()) {
      alert('Error: Por favor, complete todos los campos correctamente.');
      return;
    }
    // Simulación de envío de datos al backend
    console.log('Datos enviados al backend:', formData);
    // Lógica para manejar la respuesta del backend, mostrar mensajes de éxito o error, etc.
  };

  return (
    <div className="flex">
      {/* Mitad Izquierda (Foto del Doctor) */}
      <div className="w-1/2 p-4">
        <img src="/images/fotodoctor.jpg" alt="Foto del doctor" className="w-full h-[650px] object-cover object-bot rounded-md" />
      </div>
      
      {/* Mitad Derecha (Formulario de Registro) */}
      <div className="w-1/2 p-4 bg-blue-50">
        <form className="max-w-xl mx-auto  rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <p className="text-2xl text-center mb-4">Registro</p>
          <div className="mb-4 flex items-center">
            <div className="w-1/2 mr-2">
              <CampoNombre onChange={handleChange} />
            </div>
            <div className="w-1/2 ml-2">
              <CampoApellido onChange={handleChange} />
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <div className="w-1/2 mr-2">
              <CampoDNI onChange={handleChange} />
            </div>
            <div className="w-1/2 ml-2">
              <CampoDireccion onChange={handleChange} />
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <div className="w-1/2 mr-2">
              <CampoTelefono onChange={handleChange} />
            </div>
            <div className="w-1/2 ml-2">
              <CampoEmail onChange={handleChange} />
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <div className="w-1/2 mr-2">
              <CampoSexo onChange={handleChange} />
            </div>
            <div className="w-1/2 ml-2">
              <CampoFechaNacimiento onChange={handleChange} />
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <div className="w-1/2 mr-2">
              <CampoContrasenia onChange={handleChange} />
            </div>
            <div className="w-1/2 ml-2">
             <CampoRepetirContrasenia onChange={handleChange} contrasenia={formData.contrasenia} />
            </div>
          </div>
          <div className="mb-4">
            <BotonRegistro texto="Registrarse" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
