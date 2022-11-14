import React from 'react';
import { useState, useEffect } from 'react';
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import YoutubeSlider from "../include/YoutubeSlider";
import YoutubeSearch from "../include/YoutubeSearch";
import YoutubeCont from "../include/YoutubeCont";
import Contact from "../layout/Contact";

const Youtube = () => {
  const [youtubes, setYoutubes] = useState([]);

  const search = async (query) => {
    await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=킹타쿠&key=AIzaSyABuOUy0Teh_pPVBd6DOP0sB1mj7EnYhs0&query=${query}&maxResults=30&type=video`
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result))
      // .then((result) => console.log(result.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=킹타쿠&key=AIzaSyABuOUy0Teh_pPVBd6DOP0sB1mj7EnYhs0&maxResults=30&type=video`)
        .then((response) => response.json())
        .then((result) => setYoutubes(result.items))
        .catch((error) => console.log(error));
  }, []);

  return (
    <>
        <Header />
        <Contents>
          <Title title={["Youtube", "referene API"]} />
          <YoutubeSlider />
          <YoutubeSearch onSearch={search} />
          <YoutubeCont youtubes={youtubes} />
          <Contact />
        </Contents>
        <Footer />
    </>
  )
}

export default Youtube
