import React from 'react';
import { useState, useEffect } from 'react';
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import UnsplashSlider from "../include/UnsplashSlider";
import UnsplashSearch from "../include/UnsplashSearch";
import UnsplashTag from "../include/UnsplashTag";
import UnsplashCont from "../include/UnsplashCont";
import Contact from "../layout/Contact";

const Unsplash = () => {
  const [images, setIamges] = useState([]);
  const [random, setRandom] = useState([]);

  const search = async (query) => {
    await fetch(
      `https://api.unsplash.com/search/photos?client_id=AhDbLOTnwHGYmo4we_vDUhkIf2MTG3fS9HwGmK1slMg&query=${query}&color&count=30`
    )
      .then((response) => response.json())
      .then((result) => setIamges(result.results))
      .catch((error) => console.log(error));
  };

  const tagCHoice = async (id) => {
    await fetch(
      `https://api.unsplash.com/search/photos?client_id=AhDbLOTnwHGYmo4we_vDUhkIf2MTG3fS9HwGmK1slMg&query=${id}&color&count=30`
    )
      .then((response) => response.json())
      .then((result) => setIamges(result.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetch(`https://api.unsplash.com/photos/random?client_id=AhDbLOTnwHGYmo4we_vDUhkIf2MTG3fS9HwGmK1slMg&query=color&count=30`)
        .then((response) => response.json())
        .then((result) => setIamges(result))
        .catch((error) => console.log(error));

    fetch(`https://api.unsplash.com/photos/random?client_id=AhDbLOTnwHGYmo4we_vDUhkIf2MTG3fS9HwGmK1slMg&query=color&count=30`)
        .then((response) => response.json())
        .then((result) => setRandom(result))
        .catch((error) => console.log(error));
  }, []);

  return (
    <>
        <Header />
        <Contents>
          <Title title={["Unsplash", "referene API"]} />
          <UnsplashSlider random={random} />
          <UnsplashSearch onSearch={search} />
          <UnsplashTag tag={tagCHoice} />
          <UnsplashCont images={images} />
          <Contact />
        </Contents>
        <Footer />
    </>
  )
}

export default Unsplash