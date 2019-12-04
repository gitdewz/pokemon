export * from "./PokemonPopup";

import styled from 'styled-components';

interface PopupImage {
  image: string;
}

export const Popup = styled.section<PopupImage>`
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
    width: 98%;
    margin-left: 0;
    left: 1%;
  }
`;

export const PopupHeader = styled.h1`
  font-size: 32px;
  margin: 0 0 10px 0;
`;

export const StatContainer = styled.div`
  display: grid;
  grid-template-columns 1fr 1fr;
  grid-gap: 10px;
`;

export const Stat = styled.span`
  font-weight: bold;
`;

export const AttackHeader = styled.h2`
  font-size: 24px;
  margin: 20px 0;
`;

export const CloseImage = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  height: 25px;
  width: 25px;
  cursor: pointer;
`;

export const CloseButton = styled.button`
  margin-top: 20px;
  width: 100%;
  height: 50px;
  cursor: pointer;
`;