// import React from "react";
// import "./App.css";
// import Header from "./components/Header";
// import ToggleView from "./components/ToggleView";
// import Table from "./components/Table";
// import TableRow from "./components/TableRow";
// import Footer from "./components/Footer";
// import TableHeader from "./components/TableHeader";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { obj: [] };
//   }
//   componentDidMount() {
//     var that = this;
//     fetch("https://api.github.com/gists/public")
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//         that.setState((state, props) => ({ obj: data }));
//       });
//   }
//   componentDidUpdate() {
//     // var that = this;
//     // fetch("https://api.github.com/gists/public")
//     //   .then(function (response) {
//     //     return response.json();
//     //   })
//     //   .then(function (data) {
//     //     that.setState((state, props) => ({ obj: data }));
//     //   });
//   }
//   render() {
//     return (
//       <div>
//         <Header></Header>
//         <ToggleView></ToggleView>
//         <Table list={this.state.obj}>
//           <TableHeader></TableHeader>
//           <TableRow></TableRow>
//         </Table>
//         <Footer></Footer>
//       </div>
//     );
//   }
// }

// export default App;
import React, { createContext, useReducer } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import { initialState, reducer } from "./store/reducer";

export const AuthContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
