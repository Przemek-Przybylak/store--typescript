import { Switch } from "react-router";
import { Route, HashRouter } from "react-router-dom";
import { Container } from "./common/Container";
import { CategoryPage } from "./featores/categoryPage";
import { Homepage } from "./featores/Homepage";
import { ProductPage } from "./featores/productPage";
import { ShoppingBasketPage } from "./featores/shoppingBasket/ShoppingBasketPage";

function App() {
  return (
    <div className="App">
      <Container>
        <HashRouter>
          <Switch>
            <Route path="/category:category">
              <CategoryPage />
            </Route>
            <Route path="/product:id">
              <ProductPage />
            </Route>
            <Route path="/basket">
              <ShoppingBasketPage />
            </Route>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </HashRouter>
      </Container>
    </div>
  );
}

export default App;
