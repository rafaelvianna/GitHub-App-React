import React from 'react'

const UserInfo = () => (
  <div className='user-info'>
    <img src="http://revistaberro.com/wp-content/uploads/2015/08/reprodu%C3%A7%C3%A3o-600x350.jpg"/>
    <h1>
      <a href="https://api.github.com/users/rafaelvianna">Rafael Vianna</a>
    </h1>

    <ul className='repos-info'>
      <li>- Respositórios: 122</li>
      <li>- Seguidores: 193</li>
      <li>- Seguindo: 100</li>
    </ul>
  </div>
)

export default UserInfo
