"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function Cards({ data }) {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-12">
      <div className="mx-auto max-w-2xl mb-16 lg:mb-20">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">Nuestros servicios</h2>
      </div>
      <div className="swiper-container" style={{ marginTop: '20px' }}>
        <Swiper
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Pagination, Autoplay]}
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
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          spaceBetween={30}
          className="w-full rounded-lg"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <article
                key={index}
                className="card rounded-none border-solid w-60 h-60 bg-white border border-gray-300 hover:border-blue-500 transition-transform transform hover:scale-105 duration-500 mx-auto"
              >
                <div className="card-body shadow-xl flexCenter hover:bg-blue transition-colors duration-500">
                  <div className="card-actions flexCenter">
                    <img src={item.image} alt="" className="h-20 w-25 sm:h-24 sm:w-24" />
                    <h3 className="mb-3 text-lg font-semibold leading-6 text-center text-gray-900 hover:decoration-blue-400">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
