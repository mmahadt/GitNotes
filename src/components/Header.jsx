import React, { Component } from "react";

function Header(props) {
  const classes = "app-theme-color header";
  return (
    <div className={classes}>
      <div>EMUMBA</div>
      <input type="text"></input>
      <button>Search</button>
    </div>
  );
}

export default Header;
