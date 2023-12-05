

import PropTypes from "prop-types";


function GameSlide({ game, handleToggleVideo, active }) {
  return (
      <div className="gameSlider">
        <img src={game.img} alt="Game Image" />
        <div className={`video ${active ? "active" : undefined}`}>
          <iframe
            width="1280"
            height="720"
            src={game.trailer}
            title={game.title}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            allowFullScreen
          ></iframe>
        </div>
        <div className="content">
          <h2>{game.title}</h2>
          <p>{game.description}</p>
          <div className="buttons">
            <a href="#" className="orderBtn">
              Order Now
            </a>
            <a
              href="#"
              className={`playBtn ${active ? "active" : undefined}`}
              onClick={handleToggleVideo}
            >
              <span className="pause">
                <i className="bi bi-pause-fill"></i>
              </span>
              <span className="play">
                <i className="bi bi-play-fill"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
  );
}

export default GameSlide;

GameSlide.propTypes = {
  game: PropTypes.object,
  handleToggleVideo: PropTypes.func,
  active: PropTypes.bool,
};
