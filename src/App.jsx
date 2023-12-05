// import BootStrap
import "bootstrap/dist/css/bootstrap.min.css";
// import BootStrap Icons
import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css"
import Main from "./pages/Main";
import { useState, createContext } from "react";


export const AppContext = createContext();

function App() {

  const [library,setLibrary] = useState([]);
  const [bag, setBag] = useState([]);


  return (
    <>
      <AppContext.Provider value={{library, setLibrary, bag, setBag}}>
        <Main/>
      </AppContext.Provider>
    </>
  )
} 

export default App
