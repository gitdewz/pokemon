import * as React from 'react';
import { Pokemon } from '../PokemonContainer';
import {
  Header, Logo, LogoImage, LogoText, FilterContainer, Filter, FilterLabel, MobileFilter,
  MobileFilterToggle, MobileFilterContainer, MobileButtonContainer, MobileButton
} from './';

interface SearchBarProps {
  pokemons: Pokemon[];
  onUpdatePokemons: (pokemons: Pokemon[]) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ pokemons, onUpdatePokemons }) => {
  const [name, setName] = React.useState<string>('');
  const [sortBy, setSortBy] = React.useState<string>('id');
  const [order, setOrder] = React.useState<number>(1); // 1 for asc, -1 for desc
  const [currPokemons, setCurrPokemons] = React.useState<Pokemon[]>(Array.from(pokemons));
  const [mobileFilter, setMobileFilter] = React.useState<MobileFilter>({ display: 'none', left: '100%' });
  const [type, setType] = React.useState<string>('');

  const handleSearch = (): Promise<Pokemon[]> => {
    let filteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().indexOf(name.toLowerCase()) !== -1);
    console.log(filteredPokemons);
    if (type) {
      filteredPokemons = filteredPokemons.filter(pokemon => pokemon.types.find(t => t === type));
    }
    setCurrPokemons(filteredPokemons);
    onUpdatePokemons(filteredPokemons);
    return new Promise<Pokemon[]>(resolve => {
      return resolve(filteredPokemons);
    });
  };

  const handleSort = (pokemonsToSort: Pokemon[]) => {
    const sortedPokemon = Array.from(pokemonsToSort.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 * order : -1 * order)));
    onUpdatePokemons(sortedPokemon);
  };

  const resetPokemon = () => {
    onUpdatePokemons(pokemons);
    setName('');
    setSortBy('id');
    setOrder(1);
  };

  const handleApplyAll = () => {
    handleSearch().then(filteredPokemons => handleSort(filteredPokemons));
  };

  const closeMobileMenu = () => {
    setMobileFilter({ display: 'none', left: '100%' });
  };

  const Filters = (
    <React.Fragment>
      <Filter>
        <FilterLabel htmlFor="pokemon_name">Name</FilterLabel>
        <input type="text" id="pokemon_name" value={name} onChange={e => setName(e.currentTarget.value)} />
      </Filter>
      <Filter>
        <FilterLabel htmlFor="pokemon_type">Type</FilterLabel>
        <select id="pokemon_type" onChange={e => setType(e.currentTarget.value)}>
          <option value="">All</option>
          <option value="Bug">Bug</option>
          <option value="Dark">Dark</option>
          <option value="Dragon">Dragon</option>
          <option value="Electric">Electric</option>
          <option value="Fairy">Fairy</option>
          <option value="Fighting">Fighting</option>
          <option value="Fire">Fire</option>
          <option value="Flying">Flying</option>
          <option value="Ghost">Ghost</option>
          <option value="Grass">Grass</option>
          <option value="Ground">Ground</option>
          <option value="Ice">Ice</option>
          <option value="Normal">Normal</option>
          <option value="Poison">Poison</option>
          <option value="Psychic">Psychic</option>
          <option value="Rock">Rock</option>
          <option value="Steel">Steel</option>
          <option value="Water">Water</option>
        </select>
        {mobileFilter.display === 'none' && <button onClick={handleSearch}>Search</button>}
      </Filter>
      <Filter>
        <FilterLabel htmlFor="sort_by">Sort By</FilterLabel>
        <select id="sort_by" value={sortBy} onChange={e => setSortBy(e.currentTarget.value)}>
          <option value="id">ID</option>
          <option value="name">Name</option>
          <option value="maxHP">Hit Points</option>
          <option value="maxCP">Combat Points</option>
          <option value="classification">Classification</option>
        </select>
      </Filter>
      <Filter>
        <FilterLabel htmlFor="order">Order</FilterLabel>
        <select id="order" value={order} onChange={e => setOrder(parseInt(e.currentTarget.value, 10))}>
          <option value={1}>Ascending</option>
          <option value={-1}>Descending</option>
        </select>
        {mobileFilter.display === 'none' && <button onClick={() => handleSort(currPokemons)}>Sort</button>}
      </Filter>
    </React.Fragment>
  );

  return (
    <Header>
      <Logo>
        <LogoImage src="https://icon-library.net/images/pokemon-pokeball-icon/pokemon-pokeball-icon-6.jpg" />
        <LogoText><span>Ketchum's&nbsp;</span><span>Collection</span></LogoText>
      </Logo>
      <FilterContainer>
        {Filters}
        <Filter>
          <button onClick={resetPokemon}>Reset</button>
        </Filter>
      </FilterContainer>
      <MobileFilterToggle
        role="button"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
        onClick={() => setMobileFilter({ display: 'flex', left: '0' })}
      />
      <MobileFilterContainer {...mobileFilter}>
        {Filters}
        <MobileButtonContainer>
          <MobileButton onClick={handleApplyAll}>Apply All</MobileButton>
          <MobileButton onClick={resetPokemon}>Reset</MobileButton>
          <MobileButton onClick={closeMobileMenu}>Close Menu</MobileButton>
        </MobileButtonContainer>
      </MobileFilterContainer>
    </Header>
  );
};
