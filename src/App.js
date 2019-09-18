import React from 'react';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import UserLanding from './pages/user-landing/user-landing.component';
import CreateEvent from './components/create-event/create-event.component';
import Event from './pages/event/event.comonent'
import {Route, Switch, Redirect} from 'react-router-dom'

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selector'
import {selectEventHidden} from './redux/events/events.selector';
import { createStructuredSelector } from 'reselect'
class App extends React.Component {
    constructor(props){
      super(props)
      this.state={}
    }
   unsubscribeFromAuth = null;
   
  componentDidMount() {
    const {setCurrentUser} = this.props;
    //Listens for changes in authorized user status (login and logout)
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if(userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapshot => {
            setCurrentUser({
              id: snapshot.id, ...snapshot.data()
            });
          });
        } else {
          setCurrentUser(userAuth)
        }
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  render() {
    return (
      <div className="App">
        <Header currentUser={this.props.currenUser}></Header>
        {this.props.eventHiddden ? <CreateEvent/> : null}
       {this.props.eventHiddden ? null : <Event className='.new-event-form'/>}
        <Switch>
          <Route exact path='/' render={()=> this.props.currentUser ? (<Redirect to={{
            pathname:`/${this.props.currentUser.id}`
          }} />):(<HomePage />)} />
          <Route exact path='/signIn' render={() => this.props.currentUser ? (<Redirect to='/' />): (<SignInAndSignUp/>)} />
          <Route path='/:user' render={()=> this.props.currentUser ? (<UserLanding />):(<HomePage />)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser,
   eventHiddden: selectEventHidden
  })

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);