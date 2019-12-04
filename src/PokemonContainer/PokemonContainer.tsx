import * as React from 'react';
import styled from 'styled-components';
import { PokemonCard } from '../PokemonCard';
import { PokemonPopup } from '../PokemonPopup';

interface PokemonDimension {
  minimum: string;
  maximum: string;
}

export interface Attack {
  name: string;
  type: string;
  damage: number;
}

interface PokemonAttack {
  fast: Attack[];
  special: Attack[];
}

interface PokemonEvolutionRequirement {
  amount: number;
  name: string;
}

export interface Pokemon {
  id: string;
  number: string;
  name: string;
  weight: PokemonDimension;
  height: PokemonDimension;
  classification: string;
  types: string[];
  resistant: string[];
  attacks: PokemonAttack;
  weaknesses: string[];
  fleeRate: number;
  maxCP: number;
  evolutions: Pokemon[];
  evolutionRequirements: PokemonEvolutionRequirement;
  maxHP: number;
  image: string;
}

const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 25px;
  margin-top: 75px;
`;

interface PokemonContainerProps {
  pokemons: Pokemon[];
}

export const PokemonContainer: React.FC<PokemonContainerProps> = ({ pokemons }) => {
  const [activePokemon, setActivePokemon] = React.useState<Pokemon>(null);

  return (
    <Container>
      {pokemons.map((pokemon: Pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} onInfoClick={setActivePokemon} />
      ))}
      {activePokemon && <PokemonPopup pokemon={activePokemon} onClose={() => setActivePokemon(null)} />}
    </Container>
  );
};
