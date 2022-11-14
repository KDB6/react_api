import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

function YoutubeSli({random}) {
    return (
        <li>
            <a href={`https://www.youtube.com/watch?v=${random.id.videoId}`}>
                <img src={random.snippet.thumbnails.medium.url} alt={random.snippet.description} />
            </a>
        </li>
    );
}

const YoutubeSlider = ({random}) => {
    return (
        <section id="cont__youtube">
            <div className="container">
                <div className="youtube__inner">
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
                        {random.map((random, index) =>
                            index < 10 ? (
                                <SwiperSlide key={index}>
                                    <YoutubeSli key={index} random={random} index={index} />
                                </SwiperSlide>
                            ) : null
                        )}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default YoutubeSlider;