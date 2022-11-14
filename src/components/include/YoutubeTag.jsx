import React from 'react';

const youtubeList = [
  {name: "pood"},
  {name: "육식맨"},
  {name: "지식한입"},
  {name: "죠니월드"},
  {name: "박서림"},
  {name: "우왁굳의 게임방송"},
] 

function YoutubeTag ({tag}) {
  function tagClick(e) {
    tag(e.target.innerHTML);
  }
  return (
    <section className='youtube__tag'>
      <div className="container">
        {youtubeList.map((list, index) => (
          <button onClick={tagClick} key={index}>
            {list.name}
          </button>
        ))}
      </div>
    </section>
  )
}

export default YoutubeTag