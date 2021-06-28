import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import './App.css';

import AcTestOne from './Screens/acTestOne';

function App() {
  return (
    <Router>
      <Route exact activeClassName path="/" component={AcTestOne} />

  </Router>
  );
}

export default App;
