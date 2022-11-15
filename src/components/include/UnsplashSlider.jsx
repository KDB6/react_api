import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

function UnsplashSli({random}) {
    return (
        <li>
            <a href={`https://unsplash.com/photos/${random.id}`}>
                <img src={random.urls.regular} alt={random.urls.alt_description} />
            </a>
        </li>
    );
}

const UnsplashSlider = ({random}) => {
    return (
        <section id="cont__unsplash">
            <div className="container">
                <div className="unsplash__inner">
                    <Swiper
                        slidesPerView={"auto"}
                        centeredSlides={true}
                        spaceBetween={30}
                        pagination={{
                          clickable: true,
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        >
                        {random.map((random, index) =>
                            index < 10 ? (
                                <SwiperSlide key={index}>
                                    <UnsplashSli key={index} random={random} index={index} />
                                </SwiperSlide>
                            ) : null
                        )}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default UnsplashSlider;