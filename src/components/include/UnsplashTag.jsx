import React from 'react';

const unsplashList = [
  {name: "TOY"},
  {name: "ANIMAL"},
  {name: "CODING"},
  {name: "SEOUL"},
  {name: "TOKYO"},
  {name: "OSAKA"},
] 

function UnsplashTag ({tag}) {
  function tagClick(e) {
    tag(e.target.innerHTML);
  }
  return (
    <section className='unsplash__tag'>
      <div className="container">
        {unsplashList.map((list, index) => (
          <button onClick={tagClick} key={index}>
            {list.name}
          </button>
        ))}
      </div>
    </section>
  )
}

export default UnsplashTag