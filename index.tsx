import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { drawJoyDivision } from './src/joy-division';
import { drawTiled } from './src/tiled';
import { drawTriangularMesh } from './src/triangular-mesh';

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

const Tiled: React.FC = () => {
  React.useEffect(() => {
    drawTiled();
  }, []);

  return <canvas></canvas>;
};

const JoyDivision: React.FC = () => {
  React.useEffect(() => {
    drawJoyDivision();
  }, []);

  return <canvas></canvas>;
};

const TriangularMesh: React.FC = () => {
  React.useEffect(() => {
    drawTriangularMesh();
  }, []);

  return <canvas></canvas>;
};

ReactDOM.render(<App />, document.getElementById('app'));
