// React Hooks
import { useContext, useEffect, useRef, useState } from "react";

import SideMenu from "../components/SideMenu";
import Header from "./Header";
import "./main.css";
import Home from "./Home";
import Categories from "./Categories";
import Mylibrary from "./MyLibrary";
import Bag from "./Bag";
import { AppContext } from "../App";

function Main() {
  const { library, bag } = useContext(AppContext);
  const [active, setActive] = useState(false);
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  
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

  const homeRef = useRef();
  const categoriesRef = useRef();
  const libraryRef = useRef();
  const bagRef = useRef();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async() => {
    await fetch(`/api/gamesData.json`)
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  };

  const sections = [
    {
      name: "home",
      ref: homeRef,
      active: true,
    },
    {
      name: "categories",
      ref: categoriesRef,
      active: false,
    },
    {
      name: "library",
      ref: libraryRef,
      active: false,
    },
    {
      name: "bag",
      ref: bagRef,
      active: false,
    },
  ];

  const handleSectionActive = (target) => {
    sections.map((section) => {
      section.ref.current.classList.remove("active");
      if (section.ref.current.id === target) {
        section.ref.current.classList.add("active");
      }
      return section;
    });
  };

  const handelToggleActive = () => {
    setActive(!active);
    setShowMenu(!showMenu);
  };
  return (
    <main>
      {/* Render components only when loading is false */}
      {!loading && (
        <>
          <SideMenu active={active} sectionActive={handleSectionActive} showMenu={showMenu} />
          <div className={`banner ${active || isSmallScreen ? "active" : undefined}`}>
            <Header toggleActive={handelToggleActive} />
            <div className="container-fluid">
              <Home games={games} reference={homeRef} />
              <Categories games={games} reference={categoriesRef} />
              <Mylibrary games={library} reference={libraryRef} />
              <Bag games={bag} reference={bagRef} />
            </div>
          </div>
        </>
      )}
    </main>
  );
}

export default Main;
