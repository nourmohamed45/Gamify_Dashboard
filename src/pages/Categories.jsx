import filterListData from "../data/filterListData";
import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import "./categories.css";
import GameCard from "../components/GameCard";
import { AppContext } from "../App";

function Categories({ games, reference }) {
  const [data, setData] = useState(games);
  const { library } = useContext(AppContext);

  const [filters, setFilters] = useState(filterListData);

  const handleFilterGames = (category) => {
    const newFilters = filters.map((filter) => {
      filter.active = false;
      if (filter.name === category) {
        filter.active = true;
      }
      return filter;
    });
    setFilters(newFilters);

    if (category === "All") {
      setData(games);
      return;
    }

    setData(games.filter((game) => game.category === category));
  };

  const [searchText, setSearchText] = useState("");

  const handleSearchGames = (e) => {
    setSearchText(e.target.value);
    setData(
      games.filter((game) =>
        game.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  useEffect(() => {
    setData(games);
  }, [games, library]);

  return (
    <section id="categories" className="categories" ref={reference}>
      <div className="container-fluid mt-2">
        <div className="row">
          <div className="col-lg-8 d-flex align-items-center justify-content-start">
            <ul className="filters">
              {filters.map((filter) => (
                <li
                  key={filter._id}
                  className={`${filter.active ? "active" : undefined}`}
                  onClick={() => {
                    handleFilterGames(filter.name);
                  }}
                >
                  {filter.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-4 d-flex align-items-center justify-content-end">
            <div className="search">
              <i className="bi bi-search"></i>
              <input
                type="text"
                name="search"
                placeholder="Search..."
                value={searchText}
                onChange={handleSearchGames}
              />
            </div>
          </div>
        </div>
        <div className="row">
          {games &&
            games.length > 0 &&
            data.map((game) => <GameCard key={game._id} game={game} />)}
        </div>
      </div>
    </section>
  );
}

export default Categories;

Categories.propTypes = {
  games: PropTypes.array,
  reference: PropTypes.object,
};
