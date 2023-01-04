import { MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import SelectDays from "../../Coin/SelectDays/selectDays";
import "./selectCoin.css";

function SelectCoin({
  allCoins,
  coin1,
  coin2,
  days,
  handleCoinChange,
  handleDaysChange,
}) {
  const selectStyle = {
    height: "2.5rem",
    color: "var(--white)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--white)",
    },
    "& .MuiSvgIcon-root": {
      color: "var(--white)",
    },
    "&:hover": {
      "&& fieldset": {
        borderColor: "#3a80e9",
      },
    },
  };

  return (
    <div className="select-flex">
      <p>Crypto 1</p>
      <Select
        className="select-coin"
        value={coin1}
        onChange={(e) => handleCoinChange(e, true)}
        sx={selectStyle}
      >
        {allCoins
          .filter((coin) => coin.id != coin2)
          .map((coin, index) => (
            <MenuItem key={index} value={coin.id}>
              {coin.name}
            </MenuItem>
          ))}
      </Select>
      <p>Crypto 2</p>
      <Select
        className="select-coin"
        value={coin2}
        onChange={(e) => handleCoinChange(e, false)}
        sx={selectStyle}
      >
        {allCoins
          .filter((coin) => coin.id != coin1)
          .map((coin, index) => (
            <MenuItem key={index} value={coin.id}>
              {coin.name}
            </MenuItem>
          ))}
      </Select>
      <SelectDays
        days={days}
        handleDaysChange={(e) => handleDaysChange(e)}
        noText={true}
      />
    </div>
  );
}

export default SelectCoin;