/*
Using the data.json you will create a list of pokemons.
We've created the necessary components for you, now it's
up to you to pass the props properly (😅) to these
components. Begin with the Pokemon's names, and continue on
with their types. Don't forget the key! Read more here:
https://reactjs.org/docs/lists-and-keys.html
*/

import { Pokemon } from "./components/Pokemon";
import { Header } from "./components/Header";
import pokemonData from "./data.json"
/*Extra!
Feel free to create more components, such as header/footer,
or why not include some more data from the array? */

export const App = () => {
  // first I need to fetch the data from the json file... 
  const pokemonList = pokemonData.pokemons;
  // console.log(pokemonList)
  console.log(pokemonList[0].types)
  return (
    <div className="App">
      <Header />
      <div>
        {pokemonList.map((pokemon) => {
          return <Pokemon key={pokemon.id} name={pokemon.name} types={pokemon.types} height={pokemon.height} weight={pokemon.weight} />
        })}
      </div>
    </div>
  );
};
