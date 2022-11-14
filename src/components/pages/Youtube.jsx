import React from 'react';
import { useState, useEffect } from 'react';
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import YoutubeSlider from "../include/YoutubeSlider";
import YoutubeSearch from "../include/YoutubeSearch";
import YoutubeTag from "../include/YoutubeTag";
import YoutubeCont from "../include/YoutubeCont";
import Contact from "../layout/Contact";

const Youtube = () => {
  const [youtubes, setYoutubes] = useState([]);
  const [random, setYoutubesSli] = useState([]);

  // 임시
  const search = async (query) => {
    await fetch(
      `https://raw.githubusercontent.com/KDB6/react_api/main/src/assets/Exyou.json&query=${query}`
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      .catch((error) => console.log(error));
  };

  const tagCHoice = async (items) => {
    await fetch(
      `https://raw.githubusercontent.com/KDB6/react_api/main/src/assets/Exyou.json&query=${items}`
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/KDB6/react_api/main/src/assets/Exyou.json`)
        .then((response) => response.json())
        .then((result) => setYoutubes(result.items))
        .catch((error) => console.log(error));

    fetch(`https://raw.githubusercontent.com/KDB6/react_api/main/src/assets/Exyou.json`)
        .then((response) => response.json())
        .then((result) => setYoutubesSli(result.items))
        .catch((error) => console.log(error));
  }, []);

  // 진짜
  // const search = async (query) => {
  //   await fetch(
  //     `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=킹타쿠&key=AIzaSyABuOUy0Teh_pPVBd6DOP0sB1mj7EnYhs0&query=${query}&maxResults=30&type=video`
  //   )
  //     .then((response) => response.json())
  //     .then((result) => setYoutubes(result.items))
  //     .catch((error) => console.log(error));
  // };

  // const tagCHoice = async (id) => {
  //   await fetch(
  //     `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=킹타쿠&key=AIzaSyABuOUy0Teh_pPVBd6DOP0sB1mj7EnYhs0&query=${id}&maxResults=30&type=video`
  //   )
  //     .then((response) => response.json())
  //     .then((result) => setYoutubes(result.items))
  //     .catch((error) => console.log(error));
  // };

  // useEffect(() => {
  //   fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=킹타쿠&key=AIzaSyABuOUy0Teh_pPVBd6DOP0sB1mj7EnYhs0&maxResults=30&type=video`)
  //       .then((response) => response.json())
  //       .then((result) => setYoutubes(result.items))
  //       .catch((error) => console.log(error));

  //   fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=킹타쿠&key=AIzaSyABuOUy0Teh_pPVBd6DOP0sB1mj7EnYhs0&maxResults=30&type=video`)
  //       .then((response) => response.json())
  //       .then((result) => setYoutubesSli(result.items))
  //       .catch((error) => console.log(error));
  // }, []);

  return (
    <>
        <Header />
        <Contents>
          <Title title={["Youtube", "referene API"]} />
          <YoutubeSlider random={random} />
          <YoutubeSearch onSearch={search} />
          <YoutubeTag tag={tagCHoice} />
          <YoutubeCont youtubes={youtubes} />
          <Contact />
        </Contents>
        <Footer />
    </>
  )
}

export default Youtube
