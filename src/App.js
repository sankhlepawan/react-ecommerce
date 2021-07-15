import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import { HomePage, ShopPage, SignInAndSignUpPage } from './pages';
import { Header } from './components';


const App =() => {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={ShopPage} />
      <Route exact path="/signin" component={SignInAndSignUpPage} />
      
    </Switch>
    </>
  );
}
export default App;
