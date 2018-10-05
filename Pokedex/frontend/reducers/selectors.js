

export const selectAllPokemon = state => {
  let poke = state.entities.pokemon;
  return Object.values(poke);

};

export const selectPokemonItem = ({state, itemId}) => {
  let item = state.entities.item[itemId];
  return item;
};
