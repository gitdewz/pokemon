import * as React from 'react';
import styled from 'styled-components';
import { PokemonAttack } from '../PokemonAttack';
import { Pokemon } from '../PokemonContainer';

interface PopupImage {
  image: string;
}
const Popup = styled.section<PopupImage>`
  position: fixed;
  top: 25%;
  bottom: 25%;
  width: 500px;
  left: 50%;
  margin-left: -250px;
  background: white;
  border: 1px solid black;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 20px;
  overflow-y: scroll;

  &:before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.06;
    background-image: url('${({ image }) => image}');
    background-repeat: no-repeat;
    background-position: 50% 0;
    -ms-background-size: cover;
    -o-background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-size: cover;
  }

  @media (max-width: 600px) {
    width: 300px;
    margin-left: -150px;
  }
`;

const Heading = styled.h1`
  font-size: 32px;
  margin: 0 0 10px 0;
`;

const StatContainer = styled.div`
  display: grid;
  grid-template-columns 1fr 1fr;
  grid-gap: 10px;
`;

const Stat = styled.span`
  font-weight: bold;
`;

const AttackHeader = styled.h2`
  font-size: 24px;
  margin: 20px 0;
`;

const CloseImage = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  height: 25px;
  width: 25px;
`;

const CloseButton = styled.button`
  margin-top: 20px;
  width: 100%;
  height: 50px;
  cursor: pointer;
`;

interface PokemonPopupProps {
  pokemon: Pokemon;
  onClose: () => void;
}

export const PokemonPopup: React.FC<PokemonPopupProps> = ({ pokemon, onClose }) => (
  <Popup image={pokemon.image}>
    <Heading>{pokemon.name} Stat Sheet</Heading>
    <StatContainer>
      <Stat key="hp">Hit Points: {pokemon.maxHP}</Stat>
      <Stat key="cp">Compat Power: {pokemon.maxCP}</Stat>
      <Stat key="weight">
        Weight: {parseFloat(pokemon.weight.minimum)}-{pokemon.weight.maximum}
      </Stat>
      <Stat key="height">
        Height: {parseFloat(pokemon.height.minimum)}-{pokemon.height.maximum}
      </Stat>
      <Stat key="classification">Classification: {pokemon.classification}</Stat>
      <Stat key="types">Type(s): {pokemon.types.map(type => type).join(', ')}</Stat>
      <Stat key="fleerate">Flee Rate: {pokemon.fleeRate}</Stat>
      <Stat key="evolutions">
        Evolutions:{' '}
        {!pokemon.evolutions ? 'Fully Evolved' : pokemon.evolutions.map(evolution => evolution.name).join(', ')}
      </Stat>
      <Stat key="resistance">Resistance(s): {pokemon.resistant.map(resist => resist).join(', ')}</Stat>
      <Stat key="weakness">Weakness(es): {pokemon.weaknesses.map(weakness => weakness).join(', ')}</Stat>
    </StatContainer>
    <div>
      <AttackHeader>Fast Attack(s)</AttackHeader>
      <StatContainer>
        {pokemon.attacks.fast.map(attack => (
          <PokemonAttack attack={attack} background="lightgray" />
        ))}
      </StatContainer>
    </div>
    <div>
      <AttackHeader>Special Attack(s)</AttackHeader>
      <StatContainer>
        {pokemon.attacks.special.map(attack => (
          <PokemonAttack attack={attack} background="lightgray" />
        ))}
      </StatContainer>
    </div>
    <CloseImage
      src="https://icon-library.net/images/close-icon-png-transparent/close-icon-png-transparent-21.jpg"
      onClick={onClose}
    />
    <CloseButton onClick={onClose}>Close Stat Sheet</CloseButton>
  </Popup>
);
