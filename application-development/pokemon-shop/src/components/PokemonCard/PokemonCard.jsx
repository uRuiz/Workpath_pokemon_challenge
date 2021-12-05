import './PokemonCard.css';

const PokemonCard = ({
  pokemon: {
    name,
    sprites: {
      other: {
        dream_world: { front_default: frontDefault },
      },
    },
    base_experience: baseExperience,
  },
  onClick,
}) => (
  <div className="pokemon-card">
    <img className="pokemon-card__image" src={frontDefault} alt={name} />
    <div className="pokemon-card__info">
      <h3>{name}</h3>
      <p>{baseExperience} €</p>
    </div>
    <button className="pokemon-card__button" onClick={onClick} type="button">
      Add to Cart
    </button>
  </div>
);

export default PokemonCard;
