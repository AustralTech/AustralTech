import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';

const HomeHero = () => {
  return (
    <section className="bg-gray-100 py-4 md:py-20 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl mb-8 text-gray-600 hero-title drop-shadow-lg shadow-black" >Haz una <span className="text-blue drop-shadow-lg shadow-black">diferencia</span> en la vida del otro</h1>
            <p className="text-gray-600 mb-8">
              La salud es una de las cosas más importantes para nosotros. Por eso, en nuestro centro de salud, nos esforzamos por brindar la mejor atención a nuestros pacientes.
            </p>
            <Button
              type="button"
              title="Saca un turno"
              variant="btn_blue"
            />
          </div>
          <div className="flex space-x-4">
            <img
              src="https://th.bing.com/th/id/OIG1.9yT83tt2c76ujX.6Q0gE?pid=ImgGn"
              alt="Hero Image"
              className="w-80 h-96 shadow-xl object-cover rounded-3xl"
            />
            <img 
              src="https://th.bing.com/th/id/OIG3.i6M1sjJ45AQ8hNE7Pg4N?w=1024&h=1024&rs=1&pid=ImgDetMain"
              alt="hero image 2"
              className="w-80 h-96 shadow-xl object-cover rounded-3xl sm:hidden md:hidden lg:block xl:block 2xl:block hidden" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;