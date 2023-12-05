// React Hooks
import { useEffect, useState } from "react";

import "./sideMenu.css";
import navListData from "../data/navListData";
import NavListItem from "./NavListItem";
import PropTypes from "prop-types";

function SideMenu({active, sectionActive, showMenu}) {
  const [navData, setNavData] = useState(navListData);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1250);



  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1250);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const handleNavOnClick = (id, target) => {
    const newNav = navData.map((nav) => {
      nav.active = false;
      if(nav._id === id) {
        nav.active = true;
      }
      return nav;
    })
    setNavData(newNav);
    sectionActive(target)
  }
  return (
    <div className={`sideMenu ${active || isSmallScreen ? "active" : undefined} ${showMenu ? 'showmenu' : "hidden"}`}>
      <a href="#" className="logo">
        <i className="bi bi-controller"></i>
        <span className="brand">Play</span>
      </a>
      <ul className="nav">
        {navData.map((item) => (
          <NavListItem key={item._id} item={item} navOnClick={handleNavOnClick} />
        ))}
      </ul>
      <ul className="social">
        <li>
          <a href="#">
            <i className="bi bi-meta"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bi bi-twitter-x"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bi bi-youtube"></i>
          </a>
        </li>
        <li>
          <a href="#" className="share">
            <i className="bi bi-share"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideMenu;

SideMenu.propTypes = {
  // prop-name: PropTypes.(Type)
    active: PropTypes.bool,
    sectionActive: PropTypes.func,
    showMenu: PropTypes.bool,
  };