import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import "./login.js";
import "./a7a"
import "./App.css";
import Signin from "./login.js";
import LOGIN from "./a7a";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p> HEY </p>
        <button>
          <BrowserRouter>
          <Switch>
            <Route path="/signin" component={Signin}></Route>
            </Switch>
          </BrowserRouter>
          <BrowserRouter>
          <Switch>
            <Route path="/login" component={LOGIN}></Route>
            </Switch>
          </BrowserRouter>

          <text>Sign in</text>
        </button>

        <button>
          <text>sign up</text>
        </button>
      </header>
    </div>
  );
}

export default App;
