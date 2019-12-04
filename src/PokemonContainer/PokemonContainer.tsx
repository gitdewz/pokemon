import * as React from 'react';
import { PokemonCard } from '../PokemonCard';
import { PokemonPopup } from '../PokemonPopup';
import { Pokemon, PokemonWrapper, NotFoundContainer, NotFoundHeading, NotFoundMessage } from "./";

interface PokemonContainerProps {
  pokemons: Pokemon[];
}

export const PokemonContainer: React.FC<PokemonContainerProps> = ({ pokemons }) => {
  const [activePokemon, setActivePokemon] = React.useState<Pokemon>(null);

  if (pokemons.length === 0) {
    return (
      <NotFoundContainer>
        <NotFoundHeading>No Pokemon were located from that search.</NotFoundHeading>
        <NotFoundMessage>
          There are plenty of Pokemon out there, please search again or use the reset button to view all Pokemon.
        </NotFoundMessage>
      </NotFoundContainer>
    );
  }

  return (
    <PokemonWrapper>
      {pokemons.map((pokemon: Pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} onInfoClick={setActivePokemon} />
      ))}
      {activePokemon && <PokemonPopup pokemon={activePokemon} onClose={() => setActivePokemon(null)} />}
    </PokemonWrapper>
  );
};
