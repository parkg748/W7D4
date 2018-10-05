import React from 'react';
import PokemonIndexContainer from '../pokemon/pokemon_index_container';
import PokemonDetailContainer from '../pokemon/pokemon_detail_container';
import ItemDetailContainer from './items/item_detail_container';

export default class ItemDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Route path="/pokemon/:pokemonId/items/:itemId" component={PokemonIndexContainer} />
      <Route path="/pokemon/:pokemonId/items/:itemId" component={PokemonDetailContainer} />
      <Route path="/pokemon/:pokemonId/items/:itemId" component={ItemDetailContainer} />
    );
  }
}
