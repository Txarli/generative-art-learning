import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

const App: React.FC = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/tiled">Tiled</Link>
          </li>
          <li>
            <Link to="/joy-division">Joy Division</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/tiled">
          <Tiled />
        </Route>

        <Route path="/joy-division">
          <JoyDivision />
        </Route>
      </Switch>
    </div>
  </Router>
);

const Tiled: React.FC = () => {
  React.useEffect(() => {
    require('./src/tiled');
  }, []);

  return <canvas></canvas>;
};

const JoyDivision: React.FC = () => {
  React.useEffect(() => {
    require('./src/joy-division');
  }, []);

  return <canvas></canvas>;
};

ReactDOM.render(<App />, document.getElementById('app'));
