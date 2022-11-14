import React from 'react';

const unsplashList = [
  {name: "COMEDY"},
  {name: "MUSIC"},
  {name: "MARVEL"},
  {name: "ROMANCE"},
  {name: "ANIMATION"},
  {name: "FANTASY"},
] 

function MovieTag ({tag}) {
  function tagClick(e) {
    tag(e.target.innerHTML);
  }
  return (
    <section className='movie__tag'>
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

export default MovieTag