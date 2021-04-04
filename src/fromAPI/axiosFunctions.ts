import axios from "axios";
import {
  SignInProps,
  UpdateFavoritesProps,
  UserProps,
} from "../InterfacesProps/Interfaces";
import { shuffle } from "../functions/GlobalFunctions";

const BACKEND_SERVER_URL = process.env.REACT_APP_BACKEND_SERVER_URL;

export const fetchList = async () => {
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/?limit=${807}&offset=0`
  );
  const shuffledData = shuffle(data.results);
  return shuffledData;
};

export const fetchPokemonData = async (id: number) => {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return data;
};

export const fetchPokemonSpeciesData = async (id: number) => {
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`
  );
  return data;
};
export const signIn = async (body: SignInProps) => {
  const { data } = await axios.post(`${BACKEND_SERVER_URL}/api/signin`, body);
  return data;
};
export const deleteUser = async (id: string) => {
  const { data } = await axios.delete(`${BACKEND_SERVER_URL}/api/delete/${id}`);
  return data;
};
export const patchFavorites = async (
  favorites: UpdateFavoritesProps[],
  id: string
) => {
  const {
    data,
  } = await axios.patch(`${BACKEND_SERVER_URL}/api/favorites/${id}`, {
    favorites,
  });
  return data;
};
export const patchScore = async (score: number, id: string) => {
  const { data } = await axios.patch(`${BACKEND_SERVER_URL}/api/score/${id}`, {
    score,
  });
  return data;
};
export const fetchUsersList = async () => {
  const { data } = await axios.get(`${BACKEND_SERVER_URL}/api/users`);
  const sortedData = data.sort(
    (a: UserProps, b: UserProps) => b.score - a.score
  );
  return sortedData;
};
