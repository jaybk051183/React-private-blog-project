import {useState} from 'react';
import TopMenu from './components/TopMenu';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import BlogoverviewPage from './pages/Blogoverview';
import BlogpostPage from './pages/Blogpost';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute";

function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

  return (
      <Router>
          <TopMenu/>
          {isAuthenticated === true && <p>Je bent ingelogd</p>}
          {isAuthenticated === true ? <p>Je bent ingelogd</p> : <p>Je bent niet ingelogd</p>}

          <Switch>
              <Route exact path="/">
                  <HomePage />
              </Route>

              <Route exact path="/login">
                  <LoginPage/>
              </Route>

              <PrivateRoute exact path="/blogposts" auth={isAuthenticated}>
                  <BlogoverviewPage />
              </PrivateRoute>

              <PrivateRoute exact path="/blog/:blogId" auth={isAuthenticated}>
                  <BlogpostPage />
              </PrivateRoute>

          </Switch>
      </Router>
  );
}
export default App;
