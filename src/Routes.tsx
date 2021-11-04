import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./Views/Pages/Main";

const Routes: React.FunctionComponent = () => {
  return (
    <Router>
      <Route exact path="/">
        <MainPage />
      </Route>
    </Router>
  );
};

export default Routes;
