import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

function MoviePopular(props) {
    return (
        <li>
            <a href={`https://www.themoviedb.org/movie/${props.popular.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500/${props.popular.poster_path}`} alt={props.popular.title} />
                <em>
                    <span className="title">{props.popular.title}</span>
                    <span className="score">{props.popular.vote_average}</span>
                </em>
            </a>
        </li>
    );
}

const MovieList = (props) => {
    return (
        <section id="cont__movie">
            <div className="container">
                <div className="movie__inner">
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
                        {props.popular.map((popular, index) =>
                            index < 10 ? (
                                <SwiperSlide key={index}>
                                    <MoviePopular key={index} popular={popular} index={index} />
                                </SwiperSlide>
                            ) : null
                        )}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default MovieList;