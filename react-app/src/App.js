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
import ViewListings from './components/ViewListings';
import { Redirect } from 'react-router-dom';

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
        <Route path='/view-listings'>
          <ViewListings />
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
        <ProtectedRoute path='/create-listing' exact={true} >
          <ListingForm />
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <HomePage />
        </Route>
        <Route path='/'>
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
