import GameCard from "../components/GameCard";
import "./myLibrary.css";
import emptyImage from "../images/empty.svg"
import PropTypes from "prop-types";

function MyLibrary({ games, reference }) {
  return (
    <section id="library" className="library" ref={reference}>
      <div className="container-fluid mt-2">
        <div className="row mb-3">
          <h1>My Library</h1>
        </div>
        <div className="row d-flex">
          {games.length === 0 ? (
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "-40px"}}>
              <img style={{width: "400px"}} src={emptyImage} alt="Empty Image" />
              <h2 style={{marginTop: "-40px"}}>Your Library is empty</h2>
            </div>
          ) : (
            games.map((game) => <GameCard key={game._id} game={game} />)
          )}
        </div>
      </div>
    </section>
  );
}

export default MyLibrary;

MyLibrary.propTypes = {
  games: PropTypes.array,
  reference: PropTypes.object,
};
