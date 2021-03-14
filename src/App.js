import './App.css';
import Home from './google_pages/Home';
import  { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="clone">
      <Router>
        <Switch>
          <Route path="/search">
            <h1>Hey man im here</h1>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
