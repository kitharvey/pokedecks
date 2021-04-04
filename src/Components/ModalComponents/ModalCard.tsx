import React, { useRef } from "react";
import { useQuery } from "react-query";
import { RiCloseCircleFill } from "react-icons/ri";
import { LeftCardLoader, RightCardLoader } from "./ModalCardLoader";
import LeftCard from "./LeftCard";
import RightCard from "./RightCard";
import CenterCard from "./CenterCard";
import {
  fetchPokemonData,
  fetchPokemonSpeciesData,
} from "../../fromAPI/axiosFunctions";
import { useAppSelector , useAppDispatch } from "../../reduxStore/hooks";

import { setModalShow } from "../../reduxStore/modalSlice";
import useOnClickOutside from "../../functions/customHooks";

const ModalCard: React.FC = () => {
  const { modalIndex } = useAppSelector((state) => state.modal);
  const { data: dataP } = useQuery(
    ["fetchPokemonData", modalIndex],
    async () => fetchPokemonData(modalIndex)
  );
  const { data: dataS } = useQuery(
    ["fetchPokemonSpeciesData", modalIndex],
    async () => fetchPokemonSpeciesData(modalIndex)
  );
  const dispatch = useAppDispatch();

  const nmodalRef = useRef<HTMLDivElement>(null);

  const handleCloseModal = () => {
    dispatch(setModalShow(false));
  };
  useOnClickOutside(nmodalRef, handleCloseModal);

  return (
    <div
      ref={nmodalRef}
      className="relative h-max w-full rounded-md m-auto flex flex-col items-center justify-evenly bg-white p-4 shadow lg:flex-row"
    >
      <button type='button'
        className="h-8 w-8 absolute top-3 right-4 cursor-pointer transition duration-100 ease-in-out hover:opacity-50 text-4xl font-black"
        onClick={handleCloseModal}
      >
        <RiCloseCircleFill />
      </button>
      <div className="h-max w-full">
        <CenterCard pokemon={modalIndex} />
      </div>
      <div className="h-max w-full">
        {dataP && dataS ? (
          <LeftCard speciesdata={dataS} pokemondata={dataP} />
        ) : (
          <LeftCardLoader />
        )}
      </div>
      <div className="h-max w-full">
        {dataP && dataS ? (
          <RightCard speciesdata={dataS} pokemondata={dataP} />
        ) : (
          <RightCardLoader />
        )}
      </div>
    </div>
  );
};

export default ModalCard;
