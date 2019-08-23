import React from 'react';
import './App.css';
import Gameweek from './Gameweek'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
        <Route path="/gw/:id" component={Gameweek} />
    </Router>
  );
}

export default App;
