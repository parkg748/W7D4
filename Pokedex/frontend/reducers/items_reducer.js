import {RECEIVE_POKE} from '../actions/pokemon_actions';

const itemsReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_POKE:
      return action.payload.items;
    default:
      return state;
  }
};

export default itemsReducer;
