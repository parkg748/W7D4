import React from 'react';
import {fetchAllPokemon} from '../util/api_util';
import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_POKE = 'RECEIVE_POKE';

export const receiveAllPokemon = (pokemon) => ({
    type: RECEIVE_ALL_POKEMON,
    pokemon,
});

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);

export const receivePoke = (payload) => {

  return {
    type: RECEIVE_POKE,
    payload,
  };
};

export const requestPoke = (id) => (dispatch) => (
  APIUtil.fetchPoke(id)
    .then(poke => dispatch(receivePoke(poke)))
);
