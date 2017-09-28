import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='search'>
        <input
          type='search'
          placeholder='Digite o nome do usuário no GitHub' />
        </div>

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

          <div className='actions'>
            <button>Ver repositórios</button>
            <button>Ver repositórios</button>
          </div>

          <ul className='repos'>
            <h2>Repositorios</h2>
            <li><a href="#">Nome do repositório</a></li>
          </ul>

          <ul className='starred'>
            <h2>Favoritos</h2>
            <li><a href="#">Nome do repositório</a></li>
          </ul>

        </div>
      </div>
    );
  }
}

export default App;
