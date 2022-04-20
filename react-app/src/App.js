import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authenticate } from './store/session';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import Banner from './components/Banner';
import ListingProfile from './components/ListingProfile';
import ListingForm from './components/ListingForm';
import MyTrips from './components/MyTrips';
import MyListings from './components/MyListings';
import TripPage from './components/TripPage';
import HomePage from './components/HomePage';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Banner />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route path='/listings/:listingId'>
         <ListingProfile />
        </Route>
        <ProtectedRoute path='/my-listings' exact={true} >
          <MyListings />
        </ProtectedRoute>
        <ProtectedRoute path='/my-trips' exact={true} >
          <MyTrips />
        </ProtectedRoute>
        <ProtectedRoute path='/trips/:reservationId' exact={true} >
          <TripPage />
        </ProtectedRoute>
        {/* <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute> */}
        <ProtectedRoute path='/create-listing' exact={true} >
          <ListingForm />
        </ProtectedRoute>
        {/* <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute> */}
        <Route path='/' exact={true} >
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
