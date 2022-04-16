import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link className="App-logo" to="/">
            Learn React Query
          </Link>
        </nav>
        <nav>
          <Link className="App-link" to="/getting-started">
            Getting Started
          </Link>
          <Link className="App-link" to="/issues">
            Issues
          </Link>
          <Link className="App-link" to="/add">
            Add Issue
          </Link>
        </nav>
      </header>
      <div className="App-main">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
