import * as React from 'react';
import styled from 'styled-components';

export const TypeImageMap = {
  bug: 'https://i.imgur.com/mwIwr6C.png',
  dark: 'https://i.imgur.com/htWOMWX.png',
  dragon: 'https://i.imgur.com/1y76aHB.png',
  electric: 'https://i.imgur.com/EWD07Au.png',
  fairy: 'https://i.imgur.com/Xeeqoem.png',
  fighting: 'https://i.imgur.com/RC4ETBQ.png',
  fire: 'https://i.imgur.com/6LdxxWX.png',
  flying: 'https://i.imgur.com/mRHPfRC.png',
  ghost: 'https://i.imgur.com/18TUOXH.png',
  grass: 'https://i.imgur.com/mtcGfYB.png',
  ground: 'https://i.imgur.com/FmBUKqb.png',
  ice: 'https://i.imgur.com/XwU5MBE.png',
  normal: 'https://i.imgur.com/FmuNDH7.png',
  poison: 'https://i.imgur.com/WK3re80.png',
  psychic: 'https://i.imgur.com/74A4Qz8.png',
  rock: 'https://i.imgur.com/leeYY2A.png',
  steel: 'https://i.imgur.com/CdpeTxo.png',
  water: 'https://i.imgur.com/oRhK8T4.png'
};

const Type = styled.img`
  height: 25px;
  width: 25px;
`;

interface PokemonTypeProps {
  type: string;
}

export const PokemonType: React.FC<PokemonTypeProps> = ({ type }) => (
  <Type title={`Attack type: ${type}`} src={TypeImageMap[type.toLowerCase()]} />
);
