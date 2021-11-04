import { BrowserRouter as Router, Route } from "react-router-dom";
import CategoryPage from "Views/Pages/Category";
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
    </Router>
  );
};

export default Routes;
