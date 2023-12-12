import GameCard from "../components/GameCard";
import GameSwiper from "../components/GameSwiper";
import "./home.css";
import PropTypes from "prop-types";

function Home({ games, reference }) {
  return (
    <section id="home" className="home active" ref={reference}>
      <div className="container-fluid">
        <div className="row">
          <GameSwiper games={games} />
        </div>
        <div className="row mt-4 mb-4">
          <div className="col-lg-6">
            <h2 className="sectionTitle">Games on promotion</h2>
          </div>
          <div className="col-lg-6 d-flex justify-content-end align-items-center">
            <a href="#" className="viewMore">
              View More Games <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="row">
          {games &&
            games.length > 0 &&
            games.slice(0, 4).map((game) => (
              <GameCard key={game._id} game={game} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Home;

Home.propTypes = {
  games: PropTypes.array,
  reference: PropTypes.object,
};
