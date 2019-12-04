import * as React from 'react';
import { PokemonAttack } from '../PokemonAttack';
import { Pokemon } from '../PokemonContainer';
import { AttackHeader, CloseButton, CloseImage, Popup, PopupHeader, Stat, StatContainer } from './';

interface PokemonPopupProps {
  pokemon: Pokemon;
  onClose: () => void;
}

export const PokemonPopup: React.FC<PokemonPopupProps> = ({ pokemon, onClose }) => (
  <Popup image={pokemon.image}>
    <PopupHeader>{pokemon.name} Stat Sheet</PopupHeader>
    <StatContainer key="pokemonstats">
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
    <div key="fastattacks">
      <AttackHeader>Fast Attack(s)</AttackHeader>
      <StatContainer>
        {pokemon.attacks.fast.map(attack => (
          <PokemonAttack key={attack.name} attack={attack} background="lightgray" />
        ))}
      </StatContainer>
    </div>
    <div key="specialattacks">
      <AttackHeader>Special Attack(s)</AttackHeader>
      <StatContainer>
        {pokemon.attacks.special.map(attack => (
          <PokemonAttack key={attack.name} attack={attack} background="lightgray" />
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
