import React from 'react';

export const fetchAllPokemon = (pokemon) => {
  return $.ajax({
    method: 'GET',
    url: '/api/pokemon'
  });
};
