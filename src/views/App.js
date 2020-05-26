import React from 'react';

// Components
import PokemonList from './components/PokemonList'

// Styles
import './App.scss';

const App = () => {
  return (
    <div className='main-container'>
      <PokemonList />
    </div>
  );
}

export default App;
