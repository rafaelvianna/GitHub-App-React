import React, { Component } from 'react'
import Search from './components/search'
import UserInfo from './components/user-info'
import Actions from './components/actions'
import Repos from './components/repos'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <UserInfo />
        <Actions />
        <Repos
          className="repos"
          title="Repositorios"
          repos={[{
            name: 'Nome do repositorio',
            link: '#'
          }]}/>
          <Repos
            className="starred"
            title="Favoritos"
            repos={[{
              name: 'Nome do repositorio',
              link: '#'
            }]}/>
      </div>
    );
  }
}

export default App;
