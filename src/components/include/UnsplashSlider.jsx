import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

function UnsplashSli(image) {
    return (
        <li>
            <a href={`https://unsplash.com/photos/${image.random.id}`}>
                <img src={`https://unsplash.com/photos/${image.random.urls.regular}`} alt="" />
            </a>
        </li>
    );
}

const UnsplashSlider = (image) => {
    return (
        <section id="cont__unsplash">
            <div className="container">
                <div className="unsplash__inner">
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        coverflowEffect={{
                            rotate: 38,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        initialSlide= "3"
                        pagination={true}
                        modules={[EffectCoverflow, Pagination, Autoplay]}
                        className="mySwiper"
                        >
                        {image.random.map((random, index) =>
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