import React from "react";

function YoutubeItem ({ youtube }) {
  return (
    <li>
      <a href={`https://youtube.com/${youtube.items.id}`}>
        <img src={youtube.items.snippet.thumbnails.medium.url} alt="" />
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
            {youtubes.map((youtube, index) => (
              <YoutubeItem key={index} youtube={youtube} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default YoutubeCont