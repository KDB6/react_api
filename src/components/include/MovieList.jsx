// import React, { Component } from "react";

// const key = "https://api.themoviedb.org/3/search/movie?api_key=540588f0940b5e6bdcf873b4608b86f0&query=horror&page=1";
 
// const getDate = new Date();
// const yDate = getDate.getTime(1 * 24 * 60 * 60 * 1000);
// getDate.setTime(yDate);
// var yYear = getDate.getFullYear();
// var yMonth = getDate.getMonth() + 1;
// var yDay = getDate.getDate() - 1;
 
// if (yMonth < 10) {
//   yMonth = "0" + yMonth;
// }
// if (yDay < 10) {
//   yDay = "0" + yDay;
// }
// const resultDate = yYear + "-" + yMonth + "-" + yDay;
 
// const res = resultDate.slice(0, 10).replace(/-/g, "");
 
// class MovieList extends Component {
//   state = {};
 
//   componentDidMount() {
//     this._getMovies();
//   }
 
//   _renderMovies = () => {
//     const movies = this.state.movies.map((dailyBoxOfficeList, index) => {
//       return (
//         <MovieList 
//           rank={dailyBoxOfficeList.rank}
//           movieNm={dailyBoxOfficeList.movieNm}
//           key={index}
//         />
//       );
//     });
//     return movies;
//   };
 
//   _getMovies = async () => {
//     const movies = await this._callApi();
//     this.setState({
//       movies
//     });
//   };
 
//   _callApi = () => {
//     return fetch(
//       `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${res}horror&page=1`
//     )
//       .then(a => a.json())
//       .then(json => json.boxOfficeResult.dailyBoxOfficeList)
//       .catch(err => console.log(err));
//   };
 
//   render() {
//     const { movies } = this.state;
//     return (
//       <div className={movies ? "App" : "App-loading"}>
//         {movies ? this._renderMovies() : "로딩중 ..."}
//       </div>
//     );
//   }
// }
 
// export default MovieList;

// import React from "react";

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
        <section className="movieList">
            <div className="container">
                <div className="moviePopular">
                    <ul>
                        {props.popular.map((popular, index) => (
                            <MoviePopular key={index} movie={popular} index={index} />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default MovieList;