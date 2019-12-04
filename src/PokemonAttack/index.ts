export * from './PokemonAttack';

import styled from 'styled-components';

interface Options {
    background?: string;
    color?: string;
}

export const AttackDetail = styled.div<Options>`
width: 100%;
padding: 5px;
display: flex;
justify-content: space-between;
align-items: center;
box-sizing: border-box;
background-color: ${({ background }) => background};
`;

export const AttackText = styled.span<Options>`
font-weight: bold;
color: ${({ color }) => color};
`;