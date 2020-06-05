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
    })
    .catch(error => console.log(error))
  }

  render(){
    return(
      <div>

      </div>
    )
  }
}

export default App;
