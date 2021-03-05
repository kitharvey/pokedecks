import { InferGetStaticPropsType } from "next";
import { fetchList } from "../fetch/FetchData";
import useSWR from 'swr';
import { useState } from "react";
import { NameURLInterface } from "../InterfacesProps/Interfaces";
import { shuffle } from "../functions/GlobalFunctions";
import DeckOfCards from '../components/deck/DeckOfCards';

export async function getStaticProps() {
  const data = await fetchList('pokemon')
  const list: NameURLInterface[] = shuffle(data)
  return { props: { list } }
}

const IndexPage = ({list}:  InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data } = useSWR('pokemon', fetchList, { initialData: list })
  const [stateIndex, setStateIndex] = useState<number>(0);
  const [stateSearch, setStateSearch] = useState<string>('');
  return (
    <div>
      <div className="relative min-h-9/10-screen h-max w-full flex items-center justify-evenly h-9/10">
          <DeckOfCards data={data} stateIndex={stateIndex} setStateIndex={setStateIndex} stateSearch={stateSearch} setStateSearch={setStateSearch} />
      </div>
    </div>
  )

}

export default IndexPage