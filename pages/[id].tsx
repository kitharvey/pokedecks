import { InferGetServerSidePropsType } from 'next';
import {fetchList, fetchPokemonData, fetchPokemonSpeciesData} from '../fetch/FetchData';
import { getIDStringfromURL } from '../functions/GlobalFunctions';
import ModalCard from '../components/modal-components/ModalCard';
import { useRouter } from 'next/dist/client/router';
import { NameURLInterface } from '../InterfacesProps/Interfaces';

export async function getStaticPaths() {
    const items = await fetchList('pokemon')
  
    const paths = items.map((item: NameURLInterface) => ({
      params: { id: getIDStringfromURL(item.url) },
    }))
  
    return { paths, fallback: false }
  }


interface paramsProps{
    params: {
        id: string
    }
}


export async function getStaticProps({params}: paramsProps)  {

    const pokemonData = await fetchPokemonData(params.id)
    const pokemonSpeciesData = await fetchPokemonSpeciesData(params.id)

    return { props: { pokemonData,  pokemonSpeciesData} }
}


const PokemonID = ({pokemonData,  pokemonSpeciesData}:  InferGetServerSidePropsType<typeof getStaticProps>) => {
const router = useRouter()
    return (
        <div className="w-full h-max min-h-9/10-screen relative z-100 flex flex-col items-center justify-center">
                <div className="h-8 w-8 ml-auto mr-4 my-4 lg:mr-24 cursor-pointer transition duration-100 ease-in-out hover:opacity-50" onClick={() => router.push('/')} >
                    <svg viewBox="0 0 40 40">
                        <path stroke="#000000" strokeWidth={4} d="M 5,5 L 35,35 M 35,5 L 5,35" />
                    </svg>
                </div>
                <div className="w-full h-max min-h-full py-4 px-4 lg:px-24" >
                    <ModalCard speciesdata={pokemonSpeciesData} pokemondata={pokemonData} />
                </div>
            </div>
    )
}

export default PokemonID