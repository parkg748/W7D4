import React from 'react';

export const fetchAllPokemon = (pokemon) => {
  return $.ajax({
    method: 'GET',
    url: '/api/pokemon'
  });
};

export const fetchPoke = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/pokemon/${id}`,
  });
};

export const fetchItem = (id) => {
  return $.ajax({
    method: 'GET',
    // url: `/api/pokemon/${}/items/${id}`,
  });
};
