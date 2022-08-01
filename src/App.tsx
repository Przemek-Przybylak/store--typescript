import React from "react";
import { Switch } from "react-router";
import { Route, HashRouter } from "react-router-dom";
import { CategoryPage } from "./featores/categoryList/CategoryPage";
import { Homepage } from "./featores/Homepage";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path="/category:category">
            <CategoryPage />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
