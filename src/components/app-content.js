import React from 'react'
import propTypes from 'prop-types'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({
  userinfo, 
  repos, 
  starred, 
  handleSearch, 
  getRepos, 
  getStarred}) => (

    <div className="App">
      <Search handleSearch={handleSearch}/>
      {!!userinfo && <UserInfo userinfo={userinfo}/>}
      {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred}/>}
      {!!repos.length && <Repos
        className="repos"
        title="Repositorios"
        repos={repos}/>
      }
      {!!starred.length && <Repos
        className="starred"
        title="Favoritos"
        repos={starred}/>
      }
    </div>
)

AppContent.propTypes = {
  userinfo: propTypes.object,
  repos: propTypes.array.isRequired,
  starred: propTypes.array.isRequired,
}

export default AppContent
