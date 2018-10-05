import React from 'react';
import { Link } from 'react-router-dom';

export default class PokemonIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <Link to={`/pokemon/${this.props.pokemon.id}`}>
          {this.props.pokemon.name}
          <img src={this.props.pokemon.image_url} alt={this.props.pokemon.name} />
        </Link>
      </li>
    );
  }
}
