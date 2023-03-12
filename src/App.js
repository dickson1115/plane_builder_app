import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Builder from "./Components/Builder/Builder";
import Explore from "./Components/Pages/Explore";
import NavBar from "./Components/NavBar/NavBar";
import Tutorial from "./Components/Pages/Tutorial";
import BasicExample from "./BasicExample";
import "./Fonts/BebasNeueRegular.ttf";
import "./App.css";
import AuthContext from "./AuthContext/AuthContext";
import Login from "./Components/Login/Login";
import "../src/style.scss"
function App() {
  const [currentPage, setCurrentPage] = useState("");

  // Function for importing all Images
  function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
  }
  const images = importAll(require.context('./Images', false, /\.(png|jpe?g|svg)$/));
  console.log(images);
  return (
    <AuthContext.Provider value={{
      images: images
    }}>
      {/* Note: Git page doesn't support brower history, so the repository name on the url will be missing while using the browerRouter*/}
      {/* <BrowserRouter> */}
      <HashRouter>
        <NavBar currentPage={currentPage} />
        <Login />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Tutorial" element={<Tutorial />} />
          <Route path="/Builder" element={<Builder />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </HashRouter>
      {/* </BrowserRouter> */}
      {/* <SideBar /> */}
      {/* <SvgButton>
        <path clipRule="evenodd" fillRule="evenodd"
          d="M14.5 10a4.5 4.5 0 004.284-5.882c-.105-.324-.51-.391-.752-.15L15.34 6.66a.454.454 0 01-.493.11 3.01 3.01 0 01-1.618-1.616.455.455 0 01.11-.494l2.694-2.692c.24-.241.174-.647-.15-.752a4.5 4.5 0 00-5.873 4.575c.055.873-.128 1.808-.8 2.368l-7.23 6.024a2.724 2.724 0 103.837 3.837l6.024-7.23c.56-.672 1.495-.855 2.368-.8.096.007.193.01.291.01zM5 16a1 1 0 11-2 0 1 1 0 012 0z">
        </path>
        <path
          d="M14.5 11.5c.173 0 .345-.007.514-.022l3.754 3.754a2.5 2.5 0 01-3.536 3.536l-4.41-4.41 2.172-2.607c.052-.063.147-.138.342-.196.202-.06.469-.087.777-.067.128.008.257.012.387.012zM6 4.586l2.33 2.33a.452.452 0 01-.08.09L6.8 8.214 4.586 6H3.309a.5.5 0 01-.447-.276l-1.7-3.402a.5.5 0 01.093-.577l.49-.49a.5.5 0 01.577-.094l3.402 1.7A.5.5 0 016 3.31v1.277z">
        </path>
      </SvgButton> */}
      {/* <Images/> */}

      {/* // <BasicExample />
    // <SideBarExpanded />
    // <SideBarCollapsed/> */}
    </AuthContext.Provider>
  );
}
export default App;
// import React from "react";
// import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";

// function App() {

//     return (
//         <>
//             <BrowserRouter>
//                 <div style={{
//                     display: "flex",
//                     background: 'black',
//                     padding: '5px 0 5px 5px',
//                     fontSize: '20px'
//                 }}>
//                     <div style={{ margin: '10px' }}>
//                         <NavLink to="/" style={({ isActive }) => ({
//                             color: isActive ? 'greenyellow' : 'white' })}>
//                             Home
//                         </NavLink>
//                     </div>
//                     <div style={{ margin: '10px' }}>
//                         <NavLink to="/about" style={({ isActive }) => ({
//                             color: isActive ? 'greenyellow' : 'white' })}>
//                             About
//                         </NavLink>
//                     </div>
//                     <div style={{ margin: '10px' }}>
//                         <NavLink to="/contact" style={({ isActive }) => ({
//                             color: isActive ? 'greenyellow' : 'white' })}>
//                             Contact
//                         </NavLink>
//                     </div>
//                 </div>
//                 <Routes>
//                     <Route exact path="/" element={<Home />} />
//                     <Route exact path="/about" element={<About />} />
//                     <Route exact path="/contact" element={<Contact />} />
//                 </Routes>
//             </BrowserRouter>
//         </>
//     );
// }

// export default App;
