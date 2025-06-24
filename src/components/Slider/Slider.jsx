import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import image from "../../assets/images/slider/1.png"


export default function Slider(){

    const slides = [{
        title: "Надежность и качество",
        content: "Более 10 лет моказываем бухгалтерские и юридические услуги, а также занимаемся продажей программного обеспечения и техническим обслуживанием компьютерной техники.",
        image_path: image
    },
        {
            title: "Надежность и качество",
            content: "Более 10 лет моказываем бухгалтерские и юридические услуги, а также занимаемся продажей программного обеспечения и техническим обслуживанием компьютерной техники.",
            image_path: image
        }
    ]

    return (
        <div className="text-slider-container">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 1,
                    },
                    1024: {
                        slidesPerView: 1,
                    },
                }}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                effect="fade"
                speed={800}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className='wrapper-slide'>
                        <div className="text-slide">
                            <h1>{slide.title}</h1>
                            <p>{slide.content}</p>
                            <button className="details-button main-btn">
                                Подробнее
                            </button>
                        </div>
                        <img src={slide.image_path} alt="Картинка товара"/>
                        </div>
                    </SwiperSlide>

                ))}
            </Swiper>
        </div>
    )

}
