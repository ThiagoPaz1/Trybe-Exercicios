import React from 'react';
import '../App.css';
import data from '../data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor() {
    super();
    const tipo = data.filter((f) => f.type === 'Fire');

    this.passarPokemon = this.passarPokemon.bind(this);
    this.tipoPokemon = this.tipoPokemon.bind(this);
    this.psychicPokemon = this.psychicPokemon.bind(this);

    this.state = {
      botaoPassar: 0,
      tipoPokemon: tipo,
      tp: 'Fire',
    }
  }

  psychicPokemon() {
    const tipoPsychic = data.filter((f) => f.type === 'Psychic');
    
    this.setState(() => ({
      tipoPokemon: tipoPsychic,
      tp: 'Psychic',
    }));
  }

  passarPokemon() {
    const btPassar = this.state.botaoPassar;
    const btTipo = this.state.tipoPokemon;
    
    if (btPassar === data.length -1 || btTipo !== data) {
    this.setState((atualizar, _prop) => ({
      tipoPokemon: data,
      botaoPassar: atualizar.botaoPassar = -1,
    }));
  }
    
    this.setState((atualizar, _prop) => ({
      botaoPassar: atualizar.botaoPassar + 1,
    }));
  }

  tipoPokemon({ target }) {
    const tipoFogo = data.filter((f) => f.type === this.state.tp);
    const btPassar = this.state.botaoPassar;
    const btTipo = this.state.tipoPokemon;
    console.log(this.psychicPokemon())

    if (btTipo === data) {
      this.setState({
        botaoPassar: -1,
      })
    }

    if (target.name === 'fire') {
      if (btPassar < tipoFogo.length) {
        this.setState((atualizar) => ({
          tipoPokemon: tipoFogo,
          botaoPassar: atualizar.botaoPassar + 1,
        }));
      }

      if (btPassar >= tipoFogo.length -1) {
        this.setState({
          tipoPokemon: tipoFogo,
          botaoPassar: 0,
        });
      }
    }

  //   if (target.value === 'fire' && btPassar < tipoFogo.length) {
  // //     this.setState((atualizar) => {
  // //       tipoPokemon: tipoFogo,
  // //       botaoPassar: atualizar.botaoPassar + 1,
  // //     });
  // //     console.log('Pokemon do tipo fogo');
  // //     console.log(btTipo === tipoFogo);
  // //     console.log(btTipo);
  //   }
    
  //   this.setState((atualizar, _props) => ({
  //     botaoPassar: atualizar.botaoPassar + 1,
  //   }));
  }

  render() {
    return(
      <div className='pokedex'>
        <header className='titulo'>
          Pokedex
        </header>
        <section className='listaPokemon'>
          <Pokemon data={ this.state.tipoPokemon[this.state.botaoPassar] } />
          <button onClick={this.passarPokemon}>Passar Pokemon</button>
          <button onClick={this.tipoPokemon} name="fire">Fogo</button>
          <button onClick={this.psychicPokemon} >Psychic</button>
        </section>
      </div>
    );
  }
}

export default Pokedex;
