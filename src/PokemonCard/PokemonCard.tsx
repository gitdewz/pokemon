import * as React from 'react';
import { PokemonAttack } from '../PokemonAttack';
import { Pokemon } from '../PokemonContainer';
import { TypeImageMap } from '../PokemonType';
import {
  CardImageWrapper, TypeGradientMap, Card, NameText, PointDetails,
  PointText, CardDetail, TypeImage, InfoIcon, PokemonImage
} from './';

interface PokemonCardProps {
  pokemon: Pokemon;
  onInfoClick: (pokemon: Pokemon) => void;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, onInfoClick }) => {
  const handleOpenInfo = () => {
    onInfoClick(pokemon);
  };

  return (
    <Card gradient={TypeGradientMap[pokemon.types[0].toLowerCase()]} key={pokemon.id}>
      <CardImageWrapper>
        <TypeImage key="typeimage" src={TypeImageMap[pokemon.types[0].toLowerCase()]} />
        <InfoIcon
          key="infoimage"
          role="button"
          onClick={handleOpenInfo}
          src="https://icon-library.net/images/information-icon-transparent/information-icon-transparent-26.jpg"
        />
        <PokemonImage key="pokemonimage" src={pokemon.image} />
      </CardImageWrapper>
      <CardDetail>
        <NameText key="pokemonname">{pokemon.name}</NameText>
        <PointDetails>
          <PointText key="pokemonhp" color="#ff4700" textBorderColor="black">
            {pokemon.maxHP} HP
        </PointText>
          <PointText key="pokemoncp" color="#481b01" textBorderColor="#d7d7d7">
            {pokemon.maxCP} CP
        </PointText>
        </PointDetails>
      </CardDetail>
      {pokemon.attacks.fast.map(attack => (
        <PokemonAttack key={attack.name} attack={attack} />
      ))}
      {pokemon.attacks.special.map(attack => (
        <PokemonAttack key={attack.name} attack={attack} />
      ))}
    </Card>
  );
}
