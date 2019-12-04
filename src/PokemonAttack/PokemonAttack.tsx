import * as React from 'react';
import { Attack } from '../PokemonContainer';
import { PokemonType } from '../PokemonType';
import { AttackDetail, AttackText } from './';

interface PokemonAttackProps {
  attack: Attack;
  background?: string;
  color?: string;
}

export const PokemonAttack: React.FC<PokemonAttackProps> = ({ attack, background, color }) =>
  attack.type &&
  attack.name &&
  attack.damage && (
    <AttackDetail background={background}>
      <PokemonType type={attack.type ? attack.type : 'normal'} />
      <AttackText color={color} title={`Attack name: ${attack.name}`}>
        {attack.name}
      </AttackText>
      <AttackText color={color} title={`${attack.name} does ${attack.damage} damage`}>
        {attack.damage}
      </AttackText>
    </AttackDetail>
  );
