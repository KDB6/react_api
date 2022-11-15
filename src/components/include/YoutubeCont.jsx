import React from "react";

function YoutubeItem ({ youtube }) {
  return (
    <li>
      <a href={`https://www.youtube.com/watch?v=${youtube.id.videoId}`}>
        <img src={youtube.snippet.thumbnails.medium.url} alt={youtube.snippet.description} />
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