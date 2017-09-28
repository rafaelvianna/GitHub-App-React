import React from 'react'
import propTypes from 'prop-types'

const Repos = ({className, title, repos}) => (
  <ul className={className}>
    <h2>{title}</h2>
    {
      repos.map((repo, index) => (
        <li key={index}>
          <a href={repo.link}>{repo.name}</a>
        </li>
      ))
    }
  </ul>
)

Repos.defaultProps = {
  className: ''
}

Repos.propTypes = {
  className: propTypes.string,
  title: propTypes.string.isRequired,
  repos: propTypes.array,
}


export default Repos
