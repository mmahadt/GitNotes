import React, { Component } from "react";

function TableRow(props) {
  const { rowData } = props;
  const { owner, created_at } = rowData;

  const dateCalculator = (time) => {
    var d = new Date(time);
    return `${d.getDay()} ${d.getMonth()} ${d.getFullYear()}`;
  };
  const timeCalculator = (time) => {
    var d = new Date(time);
    return `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  };

  return (
    <React.Fragment>
      <input type="checkbox"></input>
      <img src={owner.avatar_url} />
      <p>{owner.url.replace("https://api.github.com/users/", "")}</p>
      <p>{dateCalculator(created_at)}</p>
      <p>{timeCalculator(created_at)}</p>
      <p>Keyword</p>
      <p>Notebook Name</p>
      <button>star</button>
      <button>fork</button>
    </React.Fragment>
  );
}

export default TableRow;
