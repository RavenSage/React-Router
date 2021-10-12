import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Components/Header.jsx';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Profile from './Components/Profile.jsx';
import NotFound from './Components/NotFound';
import Post from './Components/Post.jsx';
function App() {
  const [login, setLogin] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <button onClick={() => setLogin(!login)}>
          {login ? 'LogOut' : 'LogIn'}
        </button>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          {/* <Route path="/profile">
            {login ? <Profile /> : <Redirect to="/" />}
          </Route> */}
          <Route path="/profile">
            <Profile Login={login} />
          </Route>
          <Route path="/post/:id" component={Post} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
