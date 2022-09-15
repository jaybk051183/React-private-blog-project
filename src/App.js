import React from 'react';
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

function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

  return (
      <Router>
          <TopMenu/>
          <Switch>
              <Route path="/">
                  <HomePage />
              </Route>
              <Route path="/login">
              <LoginPage />
              </Route>
              <Route path="blog-overview">
              <BlogoverviewPage />
              </Route>
              <Route path="blog-post">
                  <BlogpostPage />
              </Route>
          </Switch>
      </Router>
  );

}

export default App;
