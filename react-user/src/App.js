import React from 'react';
import './App.css';
import axios from 'axios';

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

  componentDidUpdate() {
    console.log('Updated');
  }

  render(){
    return(
      <div>

      </div>
    )
  }
}

export default App;
