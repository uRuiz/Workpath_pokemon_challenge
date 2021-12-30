import CONFIGURATION from '../config';

const pokemonsFetch = () => {
  const url = `${CONFIGURATION.API_URL}`;
  return fetch(url).then((response) => response.json());
};

export default pokemonsFetch;
