import React from 'react'
import propTypes from 'prop-types'

const Actions = ({getRepos, getStarred}) => (
  <div className='actions'>
    <button onClick={getRepos}>Ver repositórios</button>
    <button onClick={getStarred}>Ver Favoritos</button>
  </div>
)

export default Actions
