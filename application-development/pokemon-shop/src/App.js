import './App.css';
import Header from './components/Header/Header';
import usePokemons from './hooks/usePokemons';

const App = () => {
  const { pokemons } = usePokemons();
  console.log(pokemons);
  return <Header cartItems={10} />;
};

export default App;
