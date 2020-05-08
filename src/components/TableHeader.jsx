import React, { Component } from "react";

function TableHeader() {
  return (
    <React.Component>
      <input type="checkbox"></input>
      <p></p>
      <p>Name</p>
      <p>Date</p>
      <p>Time</p>
      <p>Keyword</p>
      <p>Notebook Name</p>
      <button>star</button>
      <button>fork</button>
    </React.Component>
  );
}

export default TableHeader;
