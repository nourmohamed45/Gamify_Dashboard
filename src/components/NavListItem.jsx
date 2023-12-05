import PropTypes from "prop-types";

function NavListItem({ item, navOnClick }) {
  return (
    <li>
      <a
        href="#"
        className={`${item.active ? "active" : undefined}`}
        onClick={() => {
          navOnClick(item._id, item.target);
        }}
      >
        <i className={`bi ${item.icon}`}></i>
        <span className="navName">{item.name}</span>
      </a>
    </li>
  );
}

export default NavListItem;

NavListItem.propTypes = {
  // prop-name: PropTypes.(Type)
  item: PropTypes.object,
  navOnClick: PropTypes.func,
};
