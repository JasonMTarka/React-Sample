import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./home";
import Sudoku from "./Sudoku/sudokuSolver";
import PasswordGen from "./PassGen/passwordGen";

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
    </Switch>
  );
}
