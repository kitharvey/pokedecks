import React from "react";
import { ActualCardInterface } from "../../InterfacesProps/Interfaces";
import ActualCard from "./ActualCard";

const Card: React.FC<ActualCardInterface> = ({ pokemondata }) => {
  const types = pokemondata.types.map((type) => type.type.name);
  return (
    <ActualCard id={pokemondata.id} name={pokemondata.name} types={types} />
  );
};

export default Card;
