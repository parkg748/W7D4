import React from 'react';
import {requestPoke} from '../../actions/pokemon_actions';

export default class PokemonDetail extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    console.log('component mounted');
    this.props.requestPoke(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.pokemonId != newProps.match.params.pokemonId) {
      this.props.requestPoke(newProps.match.params.pokemonId);
    }
  }

  render() {
    if(this.props.poke === undefined) {
      return null;
    }
    return (
      <div>
        <h1>{this.props.poke.name}</h1>
        <h1>{this.props.poke.attack}</h1>

      </div>
    );
  }
}
