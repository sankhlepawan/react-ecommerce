import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import { HomePage, ShopPage } from './pages';
import { Header } from './components';


const App =() => {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={ShopPage} />
    </Switch>
    </>
  );
}
export default App;
