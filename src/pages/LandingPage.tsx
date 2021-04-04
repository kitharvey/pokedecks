import React from "react";
import ActualCard from "../components/Deck/ActualCard";
import HiddenPokemon from "../components/Game/HiddenPokemon";
import LargeButton from "../components/Landing/LargeButton";
import { landingPokemons } from "../functions/getTypeIconAndColor";
import { shuffle } from "../functions/GlobalFunctions";

const LandingPage: React.FC = () => {
  const cards = shuffle(landingPokemons);
  const playCards = cards.map((pokemon) => (
    <HiddenPokemon key={pokemon.id} id={pokemon.id} reveal={false} />
  ));
  const browseCards = cards.map((pokemon) => (
    <ActualCard key={pokemon.id} id={pokemon.id} name={pokemon.name} types={pokemon.types} />
  ));

  return (
    <div className="flex h-92.5-screen container mx-auto px-2">
      <LargeButton link="/explore" title="Explore" cards={browseCards} />
      <LargeButton link="/play" title="Play" cards={playCards} />
    </div>
  );
};

export default LandingPage;
