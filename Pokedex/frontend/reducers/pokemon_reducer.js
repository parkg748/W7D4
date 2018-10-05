import {RECEIVE_ALL_POKEMON, RECEIVE_POKE} from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const pokemonReducer = (state = {}, action) => {
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    case RECEIVE_POKE:
      return merge(newState, {[action.payload.pokemon.id]: action.payload.pokemon});
    default:
      return state;
  }
};

export default pokemonReducer;
