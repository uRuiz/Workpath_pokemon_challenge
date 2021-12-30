import pokemonsFetch from '../data-source/index';

const pokemonsRepository = async () => {
  try {
    const { results } = await pokemonsFetch();
    return results;
  } catch (error) {
    throw error;
  }
};

export default pokemonsRepository;
