import React from "react";
import MovieApp from "./Components/MovieApp";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Description from "./Components/Description";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={MovieApp} />
        <Route path="/description/:id" component={Description} />
      </div>
    </Router>
  );
}

export default App;
