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
  getGitHubApiUrl(username, type){
    const internalUsername = username ? `/${username}` : ''
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users${internalUsername}${internalType}`
  }

  handleSearch(e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13
    if(keyCode === ENTER) {
      ajax().get(this.getGitHubApiUrl(value))
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
          },
          repos: [],
          starred: []
        })
      })
    }
  }
  getRepos(type) {
    const username = this.state.userinfo.login
    ajax().get(this.getGitHubApiUrl(username, type))
    .then((result) => {
      this.setState({
        [type]: result.map((repo) => {
          return {
            name: repo.name,
            link: repo.html_url
          }
        })
      })
    })
  }

  render() {
    return (
      <AppContent
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={(e) => this.handleSearch(e)}
        clickUserInfo={(e) => this.clickUserInfo(e)}
        getRepos={() => this.getRepos('repos')}
        getStarred={() => this.getRepos('starred')}/>
    );
  }
}

export default App;
