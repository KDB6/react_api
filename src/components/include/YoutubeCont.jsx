import React from "react";

function YoutubeItem ({ items }) {
  return (
    <li>
      <a href={`https://www.googleapis.com/youtube/${items.id}`}>
        <img src={items.snippet.thumbnails} alt="" />
      </a>
    </li>
  );
};

const YoutubeCont = ({ youtubes }) => {

  return (
    <section className="cont__youtube">
      <div className="container">
        <div className="youtube__inner">
          <ul>
            {youtubes.map((items, index) => (
              <YoutubeItem key={index} items={items} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default YoutubeCont