import React from 'react';
import './App.css';
import axios from 'axios';
import { Route } from 'react-router-dom'; 
import UserComp from './components/UserComp';
import FollowersComp from './components/FollowersComp';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      profile: {},
      followers: []
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/Aaron-Lamb')
    .then(response => {
      console.log(response.data)
      this.setState({ profile: response.data})
      console.log(this.state.profile)
    })
    .catch(error => console.log(error))

    axios.get('https://api.github.com/users/Aaron-Lamb/followers')
    .then(response => {
      this.setState({ followers: response.data})
      console.log(this.state)
    })
    .catch(error => console.log(error))
  }

  render(){
    return(
      <div>
        <Route path='/' render={props => <UserComp {...props} profile={this.state.profile} />} />
        <Route path='/followers' render={props => <FollowersComp {...props} followers={this.state.followers} />} />
      </div>
    )
  }
}

export default App;
