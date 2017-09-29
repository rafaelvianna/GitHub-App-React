import React, { Component } from 'react'
import AppContent from './components/app-content'

class App extends Component {
  constructor() {
    super()
    this.state = {
      userinfo: {
        username: 'Rafael Vianna',
        photo: 'http://revistaberro.com/wp-content/uploads/2015/08/reprodu%C3%A7%C3%A3o-600x350.jpg',
        login: 'RafaelVianna',
        repos: 12,
        followers: 10,
        following: 10
      },
      repos: [{
        name: 'Repo',
        link: '#'
      }],
      starred: [{
        name: 'Repo',
        link: '#'
      }]
    }
  }

  render() {
    return (
      <AppContent
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}/>
    );
  }
}

export default App;
