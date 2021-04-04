import React from "react";
import CardWrapper from "../Deck/CardWrapper";

const CenterCard: React.FC<{ pokemon: number }> = ({ pokemon }) => {
  return (
    <div className="h-100 w-full">
      <CardWrapper id={pokemon} />
    </div>
  );
};

export default CenterCard;
