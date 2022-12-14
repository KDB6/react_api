import React from 'react'
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import AboutCont from "../include/AboutCont";
import Contact from "../layout/Contact";

const Abuot = () => {
  return (
    <>
        <Header />
        <Contents>
          <Title title={["About", "referene API"]} />
          <AboutCont />
          <Contact />
        </Contents>
        <Footer />
    </>
  )
}

export default Abuot