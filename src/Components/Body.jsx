import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Sudoku from "./Sudoku/SudokuSolver";
import PasswordGen from "./PassGen/PasswordGen";
import CovidCaseTracker from "./CovidCaseTracker/CovidCaseTracker";

export default function Body({ language }) {
  return (
    <Switch>
      <Route exact path="/">
        <Home language={language} />
      </Route>
      <Route path="/sudoku">
        <Sudoku language={language} />
      </Route>
      <Route path="/password">
        <PasswordGen language={language} />
      </Route>
      <Route path="/tracker">
        <CovidCaseTracker language={language} />
      </Route>
    </Switch>
  );
}
