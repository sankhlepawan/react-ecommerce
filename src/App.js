import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import { HomePage, ShopPage, SignInAndSignUpPage } from './pages';
import { Header } from './components';
import { auth, createUserProfileDocument } from './firebase';

class App extends React.Component{

  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        if(userRef) {
          userRef.onSnapshot(snapShop => {
            this.setState({
              currentUser: {
                id: snapShop.id,
                ...snapShop.data()
              }
            });
          });
        }
       }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
      <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndSignUpPage} />
        
      </Switch>
      </>
    );
  }
}
export default App;
