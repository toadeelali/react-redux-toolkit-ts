import { useGetPokemonAbilityQuery, useGetPokemonByNameQuery } from "./endpoint";

export default function RtkqHooks(){
  const { data: pokemonData, error: pokemonError, isLoading: pokemonIsLoading, isSuccess: pokemonIsSuccess, isUninitialized: pokemonIsUninitialized, isError: pokemonIsError  } = useGetPokemonByNameQuery('bulbasaur');
  const { data: abilityData, error: abilityError, isLoading: abilityIsLoading, isSuccess: abilityIsSuccess, isUninitialized: abilityIsUninitialized, isError: abilityIsError } = useGetPokemonAbilityQuery('');

  return <article className="divider">
    <h2>Redux toolkit query hooks</h2>
    <h4 className="mt-8 mb-4">API by name: </h4>
    <ol>
      <li>isLoading: {pokemonIsLoading+""}</li>
      <li>isSuccess: {pokemonIsSuccess+""}</li>
      <li>isError: {pokemonIsError+""}</li>
      <li>error: {pokemonError+""}</li>
      <li>isUninitialized: {pokemonIsUninitialized+""}</li>
      <li>pokemonData: {pokemonData+""}</li>
    </ol>
    <h4 className="mt-8 mb-4">API ability: </h4>
    <ol>
      <li>isLoading: {abilityIsLoading+""}</li>
      <li>isSuccess: {abilityIsSuccess+""}</li>
      <li>isError: {abilityIsError+""}</li>
      <li>error: {abilityError+""}</li>
      <li>isUninitialized: {abilityIsUninitialized+""}</li>
      <li>pokemonData: {abilityData+""}</li>
    </ol>
  </article>
}