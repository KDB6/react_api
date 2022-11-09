import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";

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
        <section className="moviePopular">
            <div className="container">
                <h2>Ranking</h2>
                <div className="moviePopular">
                    <ul>
                    <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                        >
                            
                        <SwiperSlide>
                            {props.popular.map((popular, index) =>
                                index < 10 ? (
                                    <SwiperSlide key={index}>
                                    <MoviePopular key={index} movie={popular} index={index} />
                                    </SwiperSlide>
                                ) : null
                            )}
                        </SwiperSlide>
                        </Swiper>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default MovieList;