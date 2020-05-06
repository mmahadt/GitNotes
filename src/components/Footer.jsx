import React, { Component } from "react";

function Footer(props) {
  const classes = "app-theme-color";
  return (
    <div className={classes}>
      <div>EMUMBA</div>
      <input type="text"></input>
      <button>Search</button>
    </div>
  );
}

export default Footer;
