import * as React from 'react';
import styled from 'styled-components';
import { Attack } from '../PokemonContainer';
import { PokemonType } from '../PokemonType';

interface Options {
  background?: string;
  color?: string;
}

const Detail = styled.div<Options>`
  width: 100%;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background-color: ${({ background }) => background};
`;

const Text = styled.span<Options>`
  font-weight: bold;
  color: ${({ color }) => color};
`;

interface PokemonAttackProps {
  attack: Attack;
  background?: string;
  color?: string;
}

export const PokemonAttack: React.FC<PokemonAttackProps> = ({ attack, background, color }) =>
  attack.type &&
  attack.name &&
  attack.damage && (
    <Detail background={background}>
      <PokemonType type={attack.type ? attack.type : 'normal'} />
      <Text color={color} title={`Attack name: ${attack.name}`}>
        {attack.name}
      </Text>
      <Text color={color} title={`${attack.name} does ${attack.damage} damage`}>
        {attack.damage}
      </Text>
    </Detail>
  );
