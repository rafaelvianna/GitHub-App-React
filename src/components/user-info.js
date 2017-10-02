import React from 'react'
import propTypes from 'prop-types'

const UserInfo = ({userinfo}) => (
  <div className='user-info'>
    <img src={userinfo.photo} />
    <h1>
      <a href={`https://api.github.com/users/${userinfo.login}`}>
        {userinfo.name}
      </a>
    </h1>

    <ul className='repos-info'>
      <li>Repositórios - {userinfo.repos}</li>
      <li>Seguidores - {userinfo.followers}</li>
      <li>Seguindo - {userinfo.following}</li>
    </ul>
  </div>
)

UserInfo.propTypes = {
    userinfo: propTypes.shape({
      name: propTypes.string.isRequired,
      photo: propTypes.string.isRequired,
      login: propTypes.string.isRequired,
      repos: propTypes.number.isRequired,
      followers: propTypes.number.isRequired,
      following: propTypes.number.isRequired,
    })
}

export default UserInfo
