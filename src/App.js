import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import { HomePage, ShopPage, SignInAndSignUpPage } from './pages';
import { Header } from './components';
import { auth, createUserProfileDocument } from './firebase';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user';

class App extends React.Component{

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        if(userRef) {
          userRef.onSnapshot(snapShop => {
            setCurrentUser({
              currentUser: {
                id: snapShop.id,
                ...snapShop.data()
              }
            });
          });
        }
       }
       setCurrentUser({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(null,mapDispatchToProps)(App);
