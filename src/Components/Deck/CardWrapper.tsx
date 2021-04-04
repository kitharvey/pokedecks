import React from "react";
import { useQuery } from "react-query";
import { fetchPokemonData } from "../../fromAPI/axiosFunctions";
import { CardInterface } from "../../InterfacesProps/Interfaces";
import CardLoader from "./CardLoader";
import Card from "./Card";
import "react-lazy-load-image-component/src/effects/black-and-white.css";

const CardWrapper: React.FC<CardInterface> = ({ id }) => {
  const { data, isFetching } = useQuery(
    ["fetchPokemonData", id],
    async () => fetchPokemonData(id)
  );

  return (
    <div className="h-full w-full select-none">
      {data && !isFetching ? <Card pokemondata={data} /> : <CardLoader />}
    </div>
  );
};

export default CardWrapper;
