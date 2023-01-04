import { CircularProgress } from "@mui/material";
import React from "react";
import "./loader.css";

function Loader() {
  return (
    <div className="loader-wrapper">
      <CircularProgress />
    </div>
  );
}

export default Loader;