import { Type } from "./Type";

// Destructure pokemon props here :)
export const Pokemon = ({ name, types, height, weight }) => {

  return (
    <div className="PokemonCard">
      <p>Pokemon: {name} </p>
      <Type key={name} types={types} />
      <p>Height: {height} Weight: {weight}</p>
    </div>
  );
};
