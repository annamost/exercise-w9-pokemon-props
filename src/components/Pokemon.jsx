import { Type } from "./Type";

// Destructure pokemon props here :)
export const Pokemon = ({ name, types }) => {

  return (
    <div className="PokemonCard">
      <p>Pokemon: {name} </p>
      <Type key={name} types={types} />
    </div>
  );
};
