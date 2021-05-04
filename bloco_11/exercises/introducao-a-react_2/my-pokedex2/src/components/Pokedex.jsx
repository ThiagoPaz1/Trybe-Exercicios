import React from 'react';
import '../App.css';
import data from '../data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    render() {
      const listaPokemon = data.map((lista) => <Pokemon data={lista}/>)

      return(
        <div className='pokedex'>
          <header className='titulo'>
            Pokedex
            </header>
          <section className='listaPokemon'>
            {listaPokemon}
          </section>
        </div>  
      );
    }
}

export default Pokedex