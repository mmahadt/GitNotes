import React, { Component } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

function Table(props) {
  const dateCalculator = (time) => {
    var d = new Date(time);
    return `${d.getDay()} ${d.getMonth()} ${d.getFullYear()}`;
  };
  const timeCalculator = (time) => {
    var d = new Date(time);
    return `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  };
  const { list } = props;

  const markup = list.map((item, index) => {
    return <TableRow rowData={item} key={index}></TableRow>;
  });
  return (
    <div id="table">
      {/* <TableHeader></TableHeader> */}
      {markup}
    </div>
  );
}

export default Table;
