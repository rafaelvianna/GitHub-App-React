import React, { Component } from 'react'
import AppContent from './components/app-content'
import ajax from '@fdaciuk/ajax'

class App extends Component {
  constructor() {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: []
    }
  }

  handleSearch(e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13
    if(keyCode === ENTER) {
      ajax().get(`https://api.github.com/users/${value}`)
      .then((result) => {
        console.log(result)
        this.setState({
          userinfo: {
            username: result.name,
            photo: result.avatar_url,
            login: result.login,
            repos: result.public_repos,
            followers: result.followers,
            following: result.following
          }
        })
        // username: 'Rafael Vianna',
        // photo: 'http://revistaberro.com/wp-content/uploads/2015/08/reprodu%C3%A7%C3%A3o-600x350.jpg',
        // login: 'RafaelVianna',
        // repos: 12,
        // followers: 10,
        // following: 10
      })
    }
  }

  render() {
    return (
      <AppContent
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={(e) => this.handleSearch(e)}/>
    );
  }
}

export default App;
