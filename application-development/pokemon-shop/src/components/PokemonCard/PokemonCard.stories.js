import PokemonCard from './PokemonCard';

const Template = (args) => <PokemonCard {...args} />;

export const PokemonCardDefault = Template.bind({});

PokemonCardDefault.args = {
  pokemon: {
    name: 'Bulbasaur',
    base_experience: 64,
    sprites: {
      other: {
        dream_world: {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
        },
      },
    },
  },
  onclick: () => console.log('clicked'),
};

export default {
  title: 'PokemonCard',
  component: PokemonCard,
};
