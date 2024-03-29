import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About";
import Builder from "./Components/Pages/Builder/Builder";
import Explore from "./Components/Pages/Explore";
import Navbar from "./Components/NavigationBar/NavigationBar";
import Tutorial from "./Components/Pages/Tutorial";
import './Styles/style.css';
import AuthContext from "./AuthContext/AuthContext";
import "./App.css";
import Footer from "./Components/Footer/Footer"
import Content from "./Components/Pages/Content"
import TestComponent from "./Test/TestComponent";
// import DragComponent from "./DragComponent";
// import ViewBoard from "./Components/Builder/ViewBoard"
// import BuilderCanvas from "./Components/Builder/BuilderCanvas/BuilderCanvas";
function App() {
  const [currentPage, setCurrentPage] = useState("");
  const navBarItems = ["Home", "Tutorial", "Builder", "Explore", "About"];
  // Function for importing all Images
  function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
  }
  const images = importAll(require.context('./Images', false, /\.(png|jpe?g|svg|avif)$/));

  return (
    <AuthContext.Provider value={{
      images: images
    }}>
      {/* <BrowserRouter> */}
      <HashRouter>
        <Navbar currentPage={currentPage} items = {navBarItems}/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/Tutorial" element={<Tutorial />} />
          <Route exact path="/Builder" element={<Builder />} />
          <Route exact path="/Explore" element={<Explore />} />
          <Route exact path="/About" element={<About />} />
        </Routes>
   
        <Footer items = {navBarItems}/>
      </HashRouter>
      {/* </BrowserRouter> */}
    </AuthContext.Provider>
    // <TestComponent />
  );
}
export default App;