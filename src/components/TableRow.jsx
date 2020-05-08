import React, { Component } from "react";

function TableRow(props) {
  const { rowData } = props;
  const { owner, created_at } = rowData;

  const dateCalculator = (time) => {
    const d = new Date(time);
    const month = d.toLocaleString("default", { month: "long" });
    return `${d.getDay()} ${month} ${d.getFullYear()}`;
  };
  const timeCalculator = (time) => {
    const d = new Date(time);
    return `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  };

  return (
    <React.Fragment>
      <input type="checkbox"></input>
      <img src={owner.avatar_url} alt="user profile" />
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
