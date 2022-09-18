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
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");

  return (
      <Router>
          <TopMenu isAuthenticated={isAuthenticated} toggleAuthenticated={toggleIsAuthenticated}/>
          <Switch>
              <Route exact path="/">
                  <HomePage />
              </Route>
              <Route exact path="/login">
                  <LoginPage isAuthenticated={isAuthenticated} firstName={firstName} setFirstname={setFirstName} password={password} setPassword={setPassword} toggleAuthenticated={toggleIsAuthenticated}/>
              </Route>
              <PrivateRoute path="/blogposts" isAuthenticated={isAuthenticated}>
                  <BlogoverviewPage />
              </PrivateRoute>
              <PrivateRoute path="/blog/:blogId" isAuthenticated={isAuthenticated}>
                  <BlogpostPage />
              </PrivateRoute>
          </Switch>
      </Router>
  );
}
export default App;
