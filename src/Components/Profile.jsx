import React, { useEffect } from 'react';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import ViewProfile from './ViewProfile';
import EditProfile from './EditProfile';

const Profile = ({ Login }) => {
  const history = useHistory();

  useEffect(() => {
    window.scroll(0, 0);
    if (!Login) {
      history.push('/');
    }
  }, [Login, history]);

  const { path, url } = useRouteMatch();

  return (
    <>
      <h1>Welcome to Profile Page</h1>
      <ul className="nav">
        <li>
          <Link to={`${url}/viewprofile`}>ViewProfile</Link>
        </li>
        <li>
          <Link to={`${url}/editprofile`}>EditProfile</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/viewprofile`} component={ViewProfile} />
        <Route path={`${path}/editprofile`} component={EditProfile} />
      </Switch>
    </>
  );
};

export default Profile;
