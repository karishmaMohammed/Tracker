import { Switch } from "@mui/material";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Button from "../Button/button";
import MobileDrawer from "./drawer";
import "./header.css";

function Header() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") == "dark" ? true : false
  );

  useEffect(() => {
    if (localStorage.getItem("theme") == "dark") {
      setDark();
    } else {
      setLight();
    }
  }, []);

  const changeMode = () => {
    setDarkMode(!darkMode);
    toast.success("Theme Changed Successfully!");
    const mode = localStorage.getItem("theme");
    if (mode == "dark") {
      setLight();
    } else {
      setDark();
    }
  };

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  return (
    <div className="header">
      <a href="/">
        <h1>
          CryptoStats<span style={{ color: "var(--blue)" }}>.</span>
        </h1>
      </a>
      <div className="links-flex">
        <Switch
          checked={darkMode}
          onClick={() => {
            changeMode();
          }}
        />
        <a href="/">
          <p className="link">Home</p>
        </a>
        <a href="/compare">
          <p className="link">Compare</p>
        </a>
       <a href="/watchlist">
          <p className="link">Watchlist</p>
        </a>
        <a href="/dashboard">
          <Button
            text="Dashboard"
            onClick={() => {
              console.log("btn-clicked!!!");
            }}
          />
        </a>
      </div>
      <MobileDrawer />
    </div>
  );
}

export default Header;