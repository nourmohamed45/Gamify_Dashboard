import "./bag.css";
import emptyImage from "../images/empty.svg";
import PropTypes from "prop-types";
import ShopBagItem from "../components/shopBagItem";
import { useEffect, useState } from "react";

function Bag({ games, reference }) {
  const [total, setTotal] = useState(0);

  const handleTotalPayment = () => {
    return games
      .map((game) => game.price * (1 - game.discount)) // Adjust the formula
      .reduce((acc, item) => acc + item, 0)
      .toFixed(2);
  };

  useEffect(() => {
    setTotal(handleTotalPayment());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [games]);

  return (
    <section id="bag" className="bag" ref={reference}>
      <div className="container-fluid">
        <div className="row mb-3">
          <h1>My Bag</h1>
        </div>
      </div>
      {games.length === 0 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "-40px",
          }}
        >
          <img style={{ width: "400px" }} src={emptyImage} alt="Empty Image" />
          <h2 style={{ marginTop: "-40px" }}>Your Bag is empty</h2>
        </div>
      ) : (
        <>
          <div className="row">
            <div className="table-responsive">
              <table className="shopBagTable table table-borderless align-middle">
                <thead>
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Preview</th>
                    <th scope="col">Game</th>
                    <th scope="col">Price</th>
                    <th scope="col">Discount</th>
                    <th scope="col">Payment</th>
                    <th scope="col">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {games.map((game, index) => {
                    return (
                      <ShopBagItem key={game._id} game={game} index={index} />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row d-flex justify-content-between mt-5">
            <div className="col-lg-2 d-flex align-items-center">
              <p className="itemCount">Total Items: {games.length}</p>
            </div>
            <div className="col-lg-10 d-flex justify-content-end">
              <div className="payment">
                Total: {total}
                <a href="#">
                  Check Out <i className="bi bi-wallet-fill"></i>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default Bag;

Bag.propTypes = {
  games: PropTypes.array,
  reference: PropTypes.object,
};
