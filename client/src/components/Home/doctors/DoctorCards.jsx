// Import Swiper components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllDoctors, fetchDoctorById } from '../../../redux/DoctorsSlice';

const doctors = [
  {
    id: 1,
    name: "Dr. John Doe",
    specialty: "Cardiologo",
    imageUrl: "https://www.cariverplate.com.ar/imagenes/jugadores/2023-09/702-653x667.png",
  },
  {
    id: 2,
    name: "Dr. Jane Doe",
    specialty: "Dermatologa",
    imageUrl: "https://media.todojujuy.com/adjuntos/227/imagenes/001/046/0001046880.png?0000-00-00-00-00-00",
  },
  {
    id: 3,
    name: "Dr. Richard Roe",
    specialty: "Pediatra",
    imageUrl: "https://www.cariverplate.com.ar/imagenes/jugadores/2023-09/1831-borja_653x667.png",
  },
  {
    id: 4,
    name: "Dr. Jane Roe",
    specialty: "Oftalmologa",
    imageUrl: "https://www.cariverplate.com.ar/imagenes/jugadores/2023-09/1831-borja_653x667.png",
  },
  {
    id: 5,
    name: "Dr. Mark Smith",
    specialty: "Neurologo",
    imageUrl: "https://www.cariverplate.com.ar/imagenes/jugadores/2023-09/1831-borja_653x667.png",
  },
  {
    id: 6,
    name: "Dr. Emily White",
    specialty: "Ginecologa",
    imageUrl: "https://media.todojujuy.com/adjuntos/227/imagenes/001/046/0001046880.png?0000-00-00-00-00-00",
  },
];

const DoctorsCards = () => {
  const dispatch = useDispatch();
  const { doctors, status, error } = useSelector(state => state.doctors);
  
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAllDoctors());
    }
  }, [status, dispatch]);
  
  if (status === 'loading') {
    return <div>Loading...</div>;
  } else if (status === 'failed') {
    return <div>Error: {error}</div>;
  }
  
  console.log(doctors);

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-0">
      <div className="mx-auto max-w-2xl mb-16 lg:mb-20">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
            Conoce a nuestros doctores
          </h2>
        </div>
        <div>
          <Swiper
            navigation={true} 
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            pagination={{ clickable: false  }}
            modules={[Navigation, Pagination, Autoplay]}
            className="w-full rounded-lg"
            breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 0,
                },
              }}
          >
            {doctors.map((doctor) => (
              <SwiperSlide key={doctor.id} className="mb-8" >
                <article className="card rounded-none w-60 h-60 shadow-xl flex flex-col mb-10 mt-2 justify-center items-center bg-white border border-gray-300 hover:border-blue transition-transform transform hover:scale-105 duration-500 mx-auto">
                  <div className="items-center">
                    <img
                      src={"https://www.cariverplate.com.ar/imagenes/jugadores/2023-09/1831-borja_653x667.png"}
                      alt=""
                      className="h-24 w-24 md:h-40 md:w-40 bg-gray-50"
                    />
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-center text-gray-900 group-hover:text-gray-600">
                      {doctor.name} {doctor.lastname}
                    </h3>
                    <p className="mt-1 mb-1 text-sm leading-6 text-center text-gray-400 group-hover:text-gray-500">
                      {doctor.Specialities.length > 0 ? doctor.Specialities[0].name : ''}
                    </p>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
  );
}

export default DoctorsCards;