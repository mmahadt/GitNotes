import React, { Component } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

function Table(props) {
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
