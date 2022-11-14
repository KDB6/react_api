import React from 'react';
import { useState, useEffect } from 'react';
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import MovieSearch from "../include/MovieSearch";
import MovieTag from "../include/MovieTag";
import MovieCont from "../include/MovieCont";
import MovieList from "../include/MovieList";
import Contact from "../layout/Contact";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [popular, setPopular] = useState([]);

  const search = async (query) => {
    await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=540588f0940b5e6bdcf873b4608b86f0&query=${query}`
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log(error));
  };

  const movieCHoice = async (id) => {
    await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=540588f0940b5e6bdcf873b4608b86f0&query=${id}`
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=540588f0940b5e6bdcf873b4608b86f0&language=ko-KOR&page=1&region=`)
        .then((response) => response.json())
        .then((result) => setPopular(result.results))
        // .then((result) => console.log(result.results))
        .catch((error) => console.log(error));
  }, []);

  useEffect(()=>{
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=540588f0940b5e6bdcf873b4608b86f0&query=horror&page=1"
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log(error));
  },[])

  return (
    <>
        <Header />
        <Contents>
          <Title title={["Movie", "referene API"]} />
          <MovieList popular={popular} />
          <MovieSearch onSearch={search} />
          <MovieTag tag={movieCHoice} />
          <MovieCont movies={movies}/>
          <Contact />
        </Contents>
        <Footer />
    </>
  )
}

export default Movie