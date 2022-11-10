import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";

function MoviePopular(props) {
    return (
        <li>
            <a href={`https://www.themoviedb.org/movie/${props.movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} alt={props.movie.title} />
                <em>
                    <span className="title">{props.movie.title}</span>
                    <span className="good">{props.index + 1}</span>
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
                    <div className="movie__slider">
                        <Swiper
                            effect={"coverflow"}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={"auto"}
                            coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            initialSlide: 5,
                            slideShadows: true,
                            }}
                            pagination={true}
                            modules={[EffectCoverflow, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                {props.popular.map((popular, index) =>
                                    index < 10 ? (
                                        <MoviePopular key={index} movie={popular} index={index} />
                                    ) : null
                                )}
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MovieList;