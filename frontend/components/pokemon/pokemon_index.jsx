import React, { Component } from 'react';



class PokemonIndex extends Component {
  compoentWillMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const { pokemon } = this.props;

    return (
      <section className="pokedex">
        <ul>
          {pokemon.map(poke => PokemonIndexItem key={poke.id} pokemon={poke} />)}
        </ul>
      </section>
    )

  }
}

export default PokemonIndex;
