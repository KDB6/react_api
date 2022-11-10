import React from 'react';
import { useState, useEffect } from 'react';    // 리액트에서 사용하는 변수
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import AboutCont from "../include/AboutCont";
import ReferCont from "../include/ReferCont";
import Contact from "../layout/Contact";

// 클래스 컴포넌트 / 함수형 컴포넌트 -> 리액트, 훅
// 리액트 훅 : 변수 : 저장, 추가, 변경 -> 자동 변경

const Reference = () => {
  const [references, setReference] = useState([]);

  useEffect(()=>{
    fetch("https://raw.githubusercontent.com/KDB6/react_api/main/src/utils/reference.json")
    .then(response => response.json())
    // .then(result => console.log(result.cssRefer))   // 데이터 불러올 때 객체만이냐 배열이냐에 따라 다르다
    .then(result => setReference(result.cssRefer))
    .catch(error => console.log('error', error));
  },[])

  return (
    <>
        <Header />
        <Contents>
          <Title title={["Reference", "book"]} />
          <AboutCont />
          <ReferCont references ={references}/>
          <Contact />
        </Contents>
        <Footer />
    </>
  )
}

export default Reference