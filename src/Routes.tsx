import { BrowserRouter as Router, Route } from "react-router-dom";

const Routes: React.FunctionComponent = () => {
  return (
    <Router>
      <Route exact path="/">
        <>Main</>
      </Route>
    </Router>
  );
};

export default Routes;
