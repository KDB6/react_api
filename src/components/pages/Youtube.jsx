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
import { useState } from 'react';
import { useEffect } from 'react';

const Youtube = () => {
  const [youtubes, setYoutubes] = useState([]);

  useEffect(() => {
    fetch
  })

  return (
    <>
        <Header />
        <Contents>
          <Title title={["Youtube", "referene API"]} />
          <YoutubeSlider />
          <YoutubeSearch />
          <YoutubeCont />
          <Contact />
        </Contents>
        <Footer />
    </>
  )
}

export default Youtube
