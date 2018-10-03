

export const selectAllPokemon = state => {
  let poke = state.entities.pokemon;
  let pokemon = Object.keys(poke);
  let result = [];
  pokemon.forEach((el) => {
    result.push(poke[el]);
  });
  return result;
};
