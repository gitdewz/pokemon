import * as React from 'react';
import { Type, TypeImageMap } from './';

interface PokemonTypeProps {
  type: string;
}

export const PokemonType: React.FC<PokemonTypeProps> = ({ type }) => (
  <Type title={`Attack type: ${type}`} src={TypeImageMap[type.toLowerCase()]} />
);
