import { BrowserRouter as Router, Route } from "react-router-dom";
import CategoryPage from "Views/Pages/Category";
import ProductPage from "Views/Pages/Product";
import MainPage from "./Views/Pages/Main";

const Routes: React.FunctionComponent = () => {
  return (
    <Router>
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route exact path="/categories/:category">
        <CategoryPage />
      </Route>
      <Route exact path="/product/:productId">
        <ProductPage />
      </Route>
    </Router>
  );
};

export default Routes;
