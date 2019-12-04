import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import * as React from 'react';
import { CircleLoader } from './CircleLoader';
import { Pokemon, PokemonContainer } from './PokemonContainer';
import { SearchBar } from './SearchBar';
import * as css from "./App.css";

const GET_POKEMON = gql`
  query getPokemon($first: Int!) {
    pokemons(first: $first) {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
      weaknesses
      fleeRate
      maxCP
      evolutions {
        name
      }
      evolutionRequirements {
        amount
        name
      }
      maxHP
      image
    }
  }
`;

const App = () => {
  const [pokemons, setPokemons] = React.useState<Pokemon[]>(null);
  const { loading, error, data } = useQuery(GET_POKEMON, { variables: { first: 151 } });

  React.useEffect(() => {
    if (data) {
      setPokemons(data.pokemons);
    }
  }, [data]);

  if (loading || pokemons === null) {
    return <CircleLoader />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <React.Fragment>
      <PokemonContainer pokemons={pokemons} />
      <SearchBar pokemons={data.pokemons} onUpdatePokemons={setPokemons} />
    </React.Fragment>
  );
};

export default App;
