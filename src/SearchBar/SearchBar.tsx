import * as React from 'react';
import styled from 'styled-components';
import { Pokemon } from '../PokemonContainer';

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  background-color: #ffde00;
  height: 70px;
  left: -8px;
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  position: absolute;
  height: 70px;
  left: 25px;
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 50px;
  width: 50px;
`;

const LogoText = styled.span`
  font-family: 'Proza sans-serif';
  font-weight: bold;
  font-size: 40px;
  padding: 0 15px;
`;

const FilterContainer = styled.div`
  display: flex;
  position: absolute;
  right: 25px;
`;

const Filter = styled.div`
  margin: 0 15px;
  display: flex;
`;

const FilterLabel = styled.label`
  font-weight: bold;
  font-size: 20px;
  padding: 5px;
`;

interface SearchBarProps {
  pokemons: Pokemon[];
  onUpdatePokemons: (pokemons: Pokemon[]) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ pokemons, onUpdatePokemons }) => {
  const [name, setName] = React.useState<string>('');
  const [sortBy, setSortBy] = React.useState<string>('id');
  const [order, setOrder] = React.useState<number>(1); // 1 for asc, -1 for desc
  const [currPokemons, setCurrPokemons] = React.useState<Pokemon[]>(Array.from(pokemons));

  const handleSearch = () => {
    const filteredPokemons = pokemons.filter(pokemon => pokemon.name.indexOf(name) !== -1);
    setCurrPokemons(filteredPokemons);
    onUpdatePokemons(filteredPokemons);
  };

  const handleSort = () => {
    console.log(sortBy);
    const sortedPokemon = Array.from(currPokemons.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 * order : -1 * order)));
    onUpdatePokemons(sortedPokemon);
  };

  const resetPokemon = () => {
    onUpdatePokemons(pokemons);
    setName('');
    setSortBy('id');
    setOrder(1);
  };

  return (
    <Header>
      <Logo>
        <LogoImage src="https://webstockreview.net/images/pokeball-clipart-transparent-background-3.png" />
        <LogoText>Ketchum's Collection</LogoText>
      </Logo>
      <FilterContainer>
        <Filter>
          <FilterLabel htmlFor="pokemon_name">Name</FilterLabel>
          <input type="text" id="pokemon_name" value={name} onChange={e => setName(e.currentTarget.value)} />
          <button onClick={handleSearch}>Search</button>
        </Filter>
        <Filter>
          <FilterLabel htmlFor="sort_by">Sort By</FilterLabel>
          <select id="sort_by" value={sortBy} onChange={e => setSortBy(e.currentTarget.value)}>
            <option value="id">ID</option>
            <option value="name">Name</option>
            <option value="maxHP">Hit Points</option>
            <option value="maxCP">Combat Points</option>
          </select>
          <FilterLabel htmlFor="order">Order</FilterLabel>
          <select id="order" value={order} onChange={e => setOrder(parseInt(e.currentTarget.value, 10))}>
            <option value={1}>Ascending</option>
            <option value={-1}>Descending</option>
          </select>
          <button onClick={handleSort}>Sort</button>
        </Filter>
        <Filter>
          <button onClick={resetPokemon}>Reset</button>
        </Filter>
      </FilterContainer>
    </Header>
  );
}
