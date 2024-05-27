// Import Swiper components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Import required modules for Swiper
import { Autoplay, Navigation, Pagination } from "swiper/modules";

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

const Doctors = () => {
  return (
    <div className="bg-gray-100 py-20 my-auto sm:py-32">
      <div className="mx-auto my-auto max-w-7xl px-6 lg:px-12 ">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl mb-6 font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
            Conoce a nuestros doctores
          </h2>
        </div>
        <div className="mx-auto max-w-10xl border-t-2 border-gray-200 pt-10 sm:mt-16 sm:pt-16">
          <Swiper
            navigation 
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            pagination={{ clickable: false  }}
            modules={[Navigation, Pagination, Autoplay]}
            className="swiper-container w-full"
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
                spaceBetween: 30,
              },
            }}
            
          >
            {doctors.map((doctor) => (
              <SwiperSlide key={doctor.id} >
                <article className="group w-full mx-auto h-60 flex flex-col mb-10 mt-2 justify-between bg-white border border-gray-300 hover:border-blue transition-transform transform hover:scale-105 duration-500">
                  <div className="mx-auto">
                    <img
                      src={doctor.imageUrl}
                      alt=""
                      className="h-24 w-24 md:h-40 md:w-40 bg-gray-50"
                    />
                  </div>
                  <div className="mx-auto">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-center text-gray-900 group-hover:text-gray-600">
                      {doctor.name}
                    </h3>
                    <p className="mt-1 mb-1 text-sm leading-6 text-center text-gray-400 group-hover:text-gray-500">
                      {doctor.specialty}
                    </p>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Doctors;