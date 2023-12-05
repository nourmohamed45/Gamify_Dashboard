import "./shopBagItem.css";
import { useContext } from "react";
import { AppContext } from "../App";
import PropTypes from "prop-types";


function ShopBagItem({ game, index }) {
  const { bag, setBag } = useContext(AppContext);

  const handleRemoveFromBag = (id) => {
    setBag(bag.filter((game) => game._id !== id))
  }
  return (
    <tr className="shopBagItem">
      <th scope="row">{index + 1}</th>
      <td>
        <img src={game.img} alt={game.title} className="img-fluid" />
      </td>
      <td>{game.title}</td>
      <td>${game.price.toFixed(2)}</td>
      <td>{(game.discount * 100)}%</td>
      <td>${(game.price * (1 - game.discount)).toFixed(2)}</td>
      <td><a href="#" onClick={()=> handleRemoveFromBag(game._id)}><i className="bi bi-trash"></i></a></td>
    </tr>
  );
}

export default ShopBagItem;

ShopBagItem.propTypes = {
  game: PropTypes.object,
  index: PropTypes.number,
};
