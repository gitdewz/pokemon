export * from "./SearchBar";

import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  background-color: #ffde00;
  height: 70px;
  left: 0;
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  position: absolute;
  height: 70px;
  left: 15px;
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  height: 60px;
  width: 60px;
`;

export const LogoText = styled.div`
  display: flex;
  font-family: 'Proza sans-serif';
  font-weight: bold;
  font-size: 40px;
  padding: 0 5px;

  @media (max-width: 600px) {
    flex-direction: column;
    font-size: 20px;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  position: absolute;
  right: 25px;

  @media (max-width: 1500px) {
    display: none;
  }
`;

export const Filter = styled.div`
  margin-left: 15px;
  display: flex;

  @media (max-width: 1500px) {
    display: grid;
    grid-template-columns: minmax(80px, 120px) minmax(100px, 300px);
    grid-gap: 10px;
    margin: 5px;
  }
`;

export const FilterLabel = styled.label`
  font-weight: bold;
  font-size: 20px;
  padding: 5px;
`;

export const MobileFilterToggle = styled.img`
  display: none;
  position: absolute;
  top: 10px;
  right: 25px;
  height: 50px;
  width: 50px;
  cursor: pointer;

  @media (max-width: 1500px) {
    display: block;
  }
`;

export interface MobileFilter {
  display: string;
  left: string;
}

export const MobileFilterContainer = styled.div<MobileFilter>`
  display: block;
  transition: left 1s;
  left: ${({ left }) => left};
  position: absolute;
  top: 70px;
  width: 100%;
  height: calc(100vh - 70px);
  background-color: rgba(230, 235, 251, .96);
`;

export const MobileButtonContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

export const MobileButton = styled.button`
  width: 100%;
  height: 40px;
`;
