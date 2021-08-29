// nome do pokemon;
// tipo do pokemon;
// peso médio do pokemon, acompanhado da unidade de medida usada;
// imagem do pokemon.

import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
    render() {
      const { data } = this.props;
      const { averageWeight } = data;
      
      return(
        <section className='pokemon'>
          <div className='infoPokemon'>
            <p>Nome: {data.name}</p>
            <p>Tipo: {data.type}</p>
            <p>Peso: {averageWeight.value} {averageWeight.measurementUnit}</p>
            <img src={data.image} alt="Um pokemon"/>
          </div>
        </section>  
      );
    }
}

Pokemon.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string
    }).isRequired
  }).isRequired
}

export default Pokemon