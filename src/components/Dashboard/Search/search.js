import React from "react";
import "./search.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

function SearchComponent({ search, onChange }) {
  return (
    <div className="search-box">
      <SearchRoundedIcon style={{ color: "var(--grey)", fontSize: "1.5rem" }} />
      <input
        type="text"
        className="search-input"
        placeholder="Search"
        value={search}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchComponent;