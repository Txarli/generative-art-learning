import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Tiled } from './src/Tiled';
import { JoyDivision } from './src/JoyDivision';
import { TriangularMesh } from './src/TriangularMesh';

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
          <li>
            <Link to="/triangular-mesh">Triangular mesh</Link>
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

        <Route path="/triangular-mesh">
          <TriangularMesh />
        </Route>
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('app'));
