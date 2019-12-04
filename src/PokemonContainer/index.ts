export * from './PokemonContainer';

import styled from 'styled-components';

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

export const PokemonWrapper = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 25px;
    margin-top: 75px;
  `;

export const NotFoundContainer = styled.main`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

export const NotFoundHeading = styled.h2`
    font-size: 40px;
    margin: 10px 0;
    font-weight: bold;
  `;

export const NotFoundMessage = styled.span`
    font-size: 25px;
  `;
