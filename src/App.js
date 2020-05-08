import React from "react";
import "./App.css";
import Header from "./components/Header";
import ToggleView from "./components/ToggleView";
import Table from "./components/Table";
import TableRow from "./components/TableRow";
import Footer from "./components/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { obj: [] };
  }
  componentDidMount() {
    var that = this;
    fetch("https://api.github.com/gists/public")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        that.setState((state, props) => ({ obj: data }));
        // const items = data;
        // return data;
        // console.log(items);
      });
  }
  render() {
    return (
      <div>
        <Header></Header>
        <ToggleView></ToggleView>
        <Table list={this.state.obj}>
          <TableRow></TableRow>
        </Table>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
