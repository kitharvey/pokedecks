import React, {useEffect, useState, useContext} from 'react'
import { AppContext } from './Page';
import {useGetPokemonData, useGetPokemonEvolutionChain, useGetPokemonSpeciesData} from './useGetPokemonData';
import { useSpeechSynthesis } from 'react-speech-kit';
import { GetPokemonDataInterface, GetPokemonEvolutionChainInterface, GetPokemonSpeciesDataInterface, NameURLInterface } from './CardInterface';
import egg from "../Assets/pokemon-egg.png"
import Card from '../Deck/Card';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import ProgressiveImage from 'react-progressive-image-loading';
interface ModalCardProps{
    pokemonSpeciesData: GetPokemonSpeciesDataInterface
    pokemonData: GetPokemonDataInterface
    state: {
        sprite: string,
        id: number
    }
}


const applySentenceCase = (str: string) => {
    const text = str.replace(/\r?\n|\r/g, " ")
    return text.replace(/.+?[\.\?\!](\s|$)/g, function (txt: string) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}


const getFlavorSpeech = (pokemonSpeciesData: GetPokemonSpeciesDataInterface, pokemonData: GetPokemonDataInterface) => {
    const enLang = pokemonSpeciesData.flavor_text_entries.filter((entry) => entry.language.name === "en")[0]
    const types = pokemonData.types.map(type => type.type.name)
    const legend = pokemonSpeciesData.is_legendary ? " legendary " : ""
    const mythic = pokemonSpeciesData.is_mythical ? " mythical " : ""
    const text = pokemonData.name + ". " + legend + mythic + types.join(" ") + " type pokemon. " + enLang.flavor_text.replace(/\r?\n|\r/g, " ")
    return text
}

const getImageSource = (id: string) => {
    return "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/" + getIDString(id) + ".png"
  }

const getIDString = (url: string) => {
    const tempURL = url.split("/")
    const id = +tempURL[tempURL.length - 2]
    if(id < 10) return '00' + id
    if(id >= 10 && id < 100) return '0' + id
    if(id >= 100 ) return '' + id
}

type PokemonDetailsProps = {
    category: string;
    details: React.ReactNode;
};

const FlexBetween: React.FC<PokemonDetailsProps> = ({category, details}) => {
    return (
        <div className="w-full flex justify-between">
            <p>{category}</p>
            <div>
                {details}
            </div>
        </div>
    )
} 


const ExtractEvolutionChain = (response: GetPokemonEvolutionChainInterface) => {
    let evoChain = [];
    let evoData = response.chain;

    do {
        // let evoDetails = evoData['evolution_details'][0];

    evoChain.push({
        "name": evoData.species.name,
        "url": evoData.species.url,
    });

    evoData = evoData['evolves_to'][0];
    } while (evoData && evoData.hasOwnProperty('evolves_to'));

    return evoChain
}


const BackCard: React.FC<ModalCardProps> = ({pokemonSpeciesData, pokemonData}) => {
    const pokemonEvolutionData = useGetPokemonEvolutionChain(pokemonSpeciesData.evolution_chain.url)
    const [evolutionChain, setEvolutionChain] = useState<NameURLInterface[]>()
    useEffect(() => {
        if(pokemonEvolutionData) {
            const data = ExtractEvolutionChain(pokemonEvolutionData)
            if(data) setEvolutionChain(data)
        } 
    },[pokemonEvolutionData])
    
    return (
        <div className="h-96 w-80 p-2.5 overflow-y-scroll fontSizeAdjust hideScroll flex flex-col items-center justify-between" 
            style={{backgroundColor: "#f5f1e3"}}
        >
            <div className="h-auto leading-tight p-2.5" >{applySentenceCase(pokemonSpeciesData.flavor_text_entries.filter((entry) => entry.language.name === "en")[0].flavor_text)}</div>
            
            <div className="flex flex-col bg-white p-2.5 w-full" >
                <FlexBetween
                    category="Genus:"
                    details={
                        <p>{applySentenceCase(pokemonSpeciesData.genera.filter((entry) => entry.language.name === "en")[0].genus)}</p>
                    }
                />
                <FlexBetween
                    category="Height:"
                    details={
                        <p>{pokemonData.height/10}m <span>({Math.floor(((pokemonData.height/10) * 39.37)/12)}'{(((pokemonData.height/10) * 39.37) % 12).toFixed(1)}")</span></p>
                    }
                />
                <FlexBetween
                    category="Weight:"
                    details={
                        <p>{pokemonData.weight/10}kg <span>({((pokemonData.weight/10) * 2.2).toFixed(1)} lbs)</span></p>
                    }
                />
                <FlexBetween
                    category="Abilities:"
                    details={
                        <div className="flex flex-col items-end" >
                        {pokemonData.abilities.map( (ability,index) => <p key={index}  >{ability.ability.name.split("-").map( txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()).join(" ")} <span className="text-xs" >{ability.is_hidden && "(Hidden Ability)"}</span> </p> )}
                        </div>
                    }
                />
            </div>
            
            <div className="flex justify-evenly w-full" >
                {evolutionChain && evolutionChain.map( ({name, url}, index) => <div key={index} className="flex flex-col items-center" >
                    <p className="text-xs capitalize" >{name}</p>
                    <div className="w-12 h-auto"  >
                    <ProgressiveImage
                        preview={egg}
                        src={getImageSource(url)}
                        render={(src, style) => <img alt={name} src={src} style={style} draggable="false" onDragStart={ (e: React.DragEvent<HTMLDivElement>) => e.preventDefault()} />}
                    />
                    </div>
                    {pokemonSpeciesData.is_legendary &&  <p className="text-xs" >Legendary</p>}
                    {pokemonSpeciesData.is_mythical &&  <p className="text-xs" >Mythical</p>}
                    {!(pokemonSpeciesData.is_legendary || pokemonSpeciesData.is_mythical) && <p className="text-xs" >stage{index+1}</p>}
                    </div> )}
            </div>

            <div className="grid grid-cols-6 gap-1 bg-white p-2.5 w-full" >
                    <div className="flex flex-col items-center">
                        <p className="text-xs font-bold" >HP</p>
                        <p className="text-xs" >{pokemonData.stats[0].base_stat}</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-xs font-bold" >Atk</p>
                        <p className="text-xs" >{pokemonData.stats[1].base_stat}</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-xs font-bold" >Def</p>
                        <p className="text-xs" >{pokemonData.stats[2].base_stat}</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-xs font-bold" >Sp. Atk</p>
                        <p className="text-xs" >{pokemonData.stats[3].base_stat}</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-xs font-bold" >Sp. Def</p>
                        <p className="text-xs" >{pokemonData.stats[4].base_stat}</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-xs font-bold" >Speed</p>
                        <p className="text-xs" >{pokemonData.stats[5].base_stat}</p>
                    </div>
            </div>
        </div>
    )
}

const ModalCard: React.FC<ModalCardProps> = ({pokemonSpeciesData, pokemonData, state}) => {

    return (
        <div className="w-max h-auto flex">
             <Flippy
                flipOnClick={true}
                flipDirection="horizontal"
                style={{
                    cursor: "pointer"
                }}
            >
                <FrontSide style={{padding: 0}} >
                    <Card id={state.id} />
                </FrontSide>
                <BackSide style={{padding: 0}} >
                    <BackCard pokemonSpeciesData={pokemonSpeciesData} pokemonData={pokemonData} state={state} />
                </BackSide>
            </Flippy>
    </div>
    )
}


const ModalCardLoader: React.FC = () => {
    return(
        <div 
            className="h-96 w-80 select-none p-2.5 flex flex-col justify-between relative addFilter addFlipInfinite"
            style={{backgroundColor: "#f5f1e3"}}
            >
            <div className="w-full h-80 relative bg-gray-400 border-solid border-4 border-white" 
            >
            <div className="w-52 h-auto absolute left-1/2 bottom-1/2 transform -translate-x-1/2 translate-y-1/2 animate-pulse"  >
                <img
                    alt="loader egg"
                    src={egg}
                    draggable="false" 
                    onDragStart={ (e: React.DragEvent<HTMLDivElement>) => e.preventDefault()}
                    style={{
                            filter: "grayscale(1)"
                        }}
                />
            </div>
            <div className="absolute top-2.5 w-12 h-6  rounded-lg right-1/2 transform translate-x-1/2 bg-gray-200 animate-pulse " />
            </div>
        
            <div className="flex absolute bottom-10 right-1/2 transform translate-x-1/2 " >
                <div className="-m-0.5 w-10 h-10 rounded-full border-solid border-4 border-white bg-gray-400 animate-pulse" />
                <div className="-m-0.5 w-10 h-10 rounded-full border-solid border-4 border-white bg-gray-400 animate-pulse" />
            </div>
        
        
            <div className="absolute w-32 h-6 rounded-lg bottom-2.5 right-1/2 transform translate-x-1/2 bg-gray-400 animate-pulse"   />
        </div>
    )
}



const Modal: React.FC = () => {
    const { speak, cancel, voices } = useSpeechSynthesis();
    const {state, setState} = useContext(AppContext)
    const pokemonData = useGetPokemonData(state.id)
    const pokemonSpeciesData = useGetPokemonSpeciesData(state.id)

    useEffect(() => {
        if(pokemonSpeciesData && pokemonData) {
            let timeOutID: ReturnType<typeof setTimeout> = setTimeout(() => '', 1000)
            clearTimeout(timeOutID)
            const flavorText = getFlavorSpeech(pokemonSpeciesData, pokemonData)
            timeOutID = setTimeout(() => {
                speak({
                    text: applySentenceCase(flavorText),
                    voice: voices[5],
                    pitch: .3,
                    speaking: true
                })
            }, 1000)
        } 
        return () => {
            cancel()
        }
    }, [pokemonSpeciesData])

        return (
            <div className="absolute w-full h-full top-0 left-0 bg-white bg-opacity-10 z-100 backDrop flex items-center justify-center select-none">
                <div className="absolute top-0 right-0 flex flex-col items-center mt-4 mr-4 text-white text-sm"  >
                    <svg className="fill-current text-current cursor-pointer transition duration-250 ease-in-out transform hover:scale-150" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" onClick={ () => setState({id: 0, sprite: ""})} >
                        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                    </svg>
                    <span className="text-sm">(Close)</span>
                </div>
                {(pokemonData && pokemonSpeciesData)
                    ? <ModalCard pokemonData={pokemonData}  pokemonSpeciesData={pokemonSpeciesData} state={state} />
                    : <ModalCardLoader />
                }  
            </div>
        );
    }


export default Modal