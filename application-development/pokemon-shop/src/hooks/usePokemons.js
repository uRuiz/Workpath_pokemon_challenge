/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from 'react';
import PokemonsContext from '../context/pokemonsContext';
import pokemonsRepository from '../services/pokemons';

const usePokemons = () => {
  const { pokemons, setPokemons } = useContext(PokemonsContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    pokemonsRepository().then((response) => {
      setPokemons(response);
      setLoading(false);
    });
  }, []);

  return { pokemons, loading };
};

export default usePokemons;
