import React, { useState } from "react";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import "./style/Navbar.css";
import "./style/Background.css";

function App() {
  const [mainContent, setMainContent] = useState(<Home />);

  const navButtonClick = (name) => {
    setNavButtons(
      navButtons.map((element) => {
        element.style =
          element.name === name ? "clickedButton" : "unClickedButton";
        if (element.name === name) {
          setMainContent(element.content);
        }
        return element;
      })
    );
  };

  const [navButtons, setNavButtons] = useState([
    { name: "Home", content: <Home />, style: "clickedButton" },
    { name: "Profile", content: <Profile />, style: "unClickedButton" },
    { name: "Discover", content: <Discover />, style: "unClickedButton" },
    {
      name: "Login",
      content: <Login nav={navButtonClick} />,
      style: "unClickedButton",
    },
  ]);

  return (
    <>
      <nav className="nav">
        {navButtons.map((element) => (
          <button
            key={element.name}
            onClick={() => navButtonClick(element.name)}
            href={"#" + element.name}
            className={element.style}
          >
            {element.name}
          </button>
        ))}
      </nav>
      <div className="mainContent">{mainContent}</div>
    </>
  );
}

export default App;
