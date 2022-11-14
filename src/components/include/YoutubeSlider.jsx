import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";


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
                        slidesPerView={3}
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