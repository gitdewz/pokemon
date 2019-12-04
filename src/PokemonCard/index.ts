export * from './PokemonCard';

import styled from 'styled-components';

export const TypeGradientMap = {
  bug: 'linear-gradient(90deg, rgba(14,82,48,0.8) 0%, rgba(16,121,55,0.5) 50%, rgba(14,82,48,0.8) 100%)',
  dark: 'linear-gradient(90deg, rgba(36,17,43,0.8) 0%, rgba(55,28,65,0.5) 50%, rgba(36,17,43,0.8) 100%)',
  dragon: 'linear-gradient(90deg, rgba(255,162,0,0.8) 0%, rgba(221,205,24,0.5) 50%, rgba(255,162,0,0.8) 100%)',
  electric: 'linear-gradient(90deg, rgba(174,179,67,0.8) 0%, rgba(212,219,32,0.5) 50%, rgba(174,179,67,0.8) 100%)',
  fairy: 'linear-gradient(90deg, rgba(112,11,148,0.8) 0%, rgba(147,43,184,0.5) 50%, rgba(112,11,148,0.8) 100%)',
  fighting: 'linear-gradient(90deg, rgba(88,82,81,0.8) 0%, rgba(108,99,98,0.5) 50%, rgba(88,82,81,0.8) 100%)',
  fire: 'linear-gradient(90deg, rgba(255,162,0,0.8) 0%, rgba(221,205,24,0.5) 50%, rgba(255,162,0,0.8) 100%)',
  flying: 'linear-gradient(90deg, rgba(88,82,81,0.8) 0%, rgba(108,99,98,0.5) 50%, rgba(88,82,81,0.8) 100%)',
  ghost: 'linear-gradient(90deg, rgba(112,11,148,0.8) 0%, rgba(147,43,184,0.5) 50%, rgba(112,11,148,0.8) 100%)',
  grass: 'linear-gradient(90deg, rgba(14,82,48,0.8) 0%, rgba(16,121,55,0.5) 50%, rgba(14,82,48,0.8) 100%)',
  ground: 'linear-gradient(90deg, rgba(88,82,81,0.8) 0%, rgba(108,99,98,0.5) 50%, rgba(88,82,81,0.8) 100%)',
  ice: 'linear-gradient(90deg, rgba(0,5,255,0.8) 0%, rgba(0,78,255,0.5) 50%, rgba(0,5,255,0.8) 100%)',
  normal: 'linear-gradient(90deg, rgba(88,82,81,0.8) 0%, rgba(108,99,98,0.5) 50%, rgba(88,82,81,0.8) 100%)',
  poison: 'linear-gradient(90deg, rgba(112,11,148,0.8) 0%, rgba(147,43,184,0.5) 50%, rgba(112,11,148,0.8) 100%)',
  psychic: 'linear-gradient(90deg, rgba(112,11,148,0.8) 0%, rgba(147,43,184,0.5) 50%, rgba(112,11,148,0.8) 100%)',
  rock: 'linear-gradient(90deg, rgba(88,82,81,0.8) 0%, rgba(108,99,98,0.5) 50%, rgba(88,82,81,0.8) 100%)',
  steel: 'linear-gradient(90deg, rgba(36,17,43,0.8) 0%, rgba(55,28,65,0.5) 50%, rgba(36,17,43,0.8) 100%)',
  water: 'linear-gradient(90deg, rgba(0,5,255,0.8) 0%, rgba(0,78,255,0.5) 50%, rgba(0,5,255,0.8) 100%)'
};

interface Gradient {
  gradient: string;
}

export const Card = styled.div<Gradient>`
    min-height: 150px;
    border: 3px solid black;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 5px;
    background: ${({ gradient }) => gradient};
  
    &:hover {
      transform: translateY(-1px);
      box-shadow: 3px 3px .4px black;
    }
  `;

export const NameText = styled.span`
    font-size: 24px;
    font-weight: bold;
  `;

export const PointDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  `;

interface PointOptions {
  color?: string;
  textBorderColor: string;
}

export const PointText = styled.span<PointOptions>`
    font-size: 18px;
    font-weight: bold;
    color: ${({ color }) => (color ? color : '#000')};
    text-shadow: ${({ textBorderColor }) =>
    `-1px 0 ${textBorderColor}, 0 1px ${textBorderColor}, 1px 0 ${textBorderColor}, 0 -1px ${textBorderColor}`};
  `;

export const CardDetail = styled.div`
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

export const CardImageWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 30px;
    border: 3px solid black;
    box-sizing: border-box;
    position: relative;
    background-color: #fff;
  `;

export const TypeImage = styled.img`
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0.1;
    top: 0;
  `;

export const InfoIcon = styled.img`
    position: absolute;
    height: 25px;
    width: 25p;
    top: 5px;
    right: 5px;
    cursor: pointer;
  `;

export const PokemonImage = styled.img`
    display: block;
    max-width: 250px;
    width: auto;
    height: 150px;
  `;
