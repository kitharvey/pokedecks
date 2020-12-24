import React, {useState, useEffect} from 'react'
import ProgressiveImage from 'react-progressive-image-loading';
import { applySentenceCase, extractEvolutionChain, getImageSourceFromURL } from '../Functions/GlobalFunctions';
import { ModalCardProps, NameURLInterface } from './CardInterface'
import FlexBetween from './FlexBetween';
import { useGetPokemonEvolutionChain } from './useGetPokemonData'
import egg from "../Assets/pokemon-egg.png"
import { LazyImage } from 'react-lazy-images';



const ModalBackCard: React.FC<ModalCardProps> = ({pokemonSpeciesData, pokemonData}) => {
    const pokemonEvolutionData = useGetPokemonEvolutionChain(pokemonSpeciesData.evolution_chain.url)
    const [evolutionChain, setEvolutionChain] = useState<NameURLInterface[] | null>(null)
    useEffect(() => {
        if(pokemonEvolutionData) {
            const data = extractEvolutionChain(pokemonEvolutionData)
            if(data) setEvolutionChain(data)
        }

        return (() => setEvolutionChain(null))
    },[pokemonEvolutionData])
    
    return (
        <div className="h-full w-full p-2.5 fontSizeAdjust flex flex-col items-center justify-between" 
            style={{backgroundColor: "#eaeaea"}}
        >
            <div className="h-auto max-h-20 leading-tight p-2.5 text-xs" >{applySentenceCase(pokemonSpeciesData.flavor_text_entries.filter((entry) => entry.language.name === "en")[0].flavor_text)}</div>
            
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
                    {/* <ProgressiveImage
                        preview={egg}
                        src={getImageSourceFromURL(url)}
                        render={(src, style) => <img alt={name} src={src} style={style} draggable="false" onDragStart={ (e: React.DragEvent<HTMLDivElement>) => e.preventDefault()} />}
                    /> */}
                    <LazyImage
                        src={getImageSourceFromURL(url)}
                        alt={name}
                        placeholder={({ imageProps, ref }) => (
                        <img ref={ref} src={egg} alt={imageProps.alt} draggable="false" onDragStart={ (e: React.DragEvent<HTMLDivElement>) => e.preventDefault()} style={{filter: "blur(10px)"}} />
                        )}
                        actual={({ imageProps }) => <img {...imageProps} draggable="false" onDragStart={ (e: React.DragEvent<HTMLDivElement>) => e.preventDefault()} />}
                    />
                    </div>
                    {pokemonSpeciesData.is_legendary &&  <p className="text-xs" >Legendary</p>}
                    {pokemonSpeciesData.is_mythical &&  <p className="text-xs" >Mythical</p>}
                    {!(pokemonSpeciesData.is_legendary || pokemonSpeciesData.is_mythical) && <p className="text-xs" >stage{index+1}</p>}
                    </div> )}
            </div>

            <div className="flex justify-evenly bg-white p-2.5 w-full" >
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


export default ModalBackCard