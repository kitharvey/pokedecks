import React from 'react'
import { LazyImage } from 'react-lazy-images';
import egg from "../../assets/pokemon-egg.png"

interface HiddenPokemonProps {
    sprite: string
    reveal: boolean
}

const HiddenPokemon: React.FC<HiddenPokemonProps> = ({sprite, reveal}) => {
        return (
            <div className='w-72 h-72 my-8' >
            <LazyImage
                src={sprite}
                alt='secret pokemon'
                placeholder={({ imageProps, ref }) => (
                    <img  ref={ref} src={egg} alt={imageProps.alt} draggable="false" onDragStart={ (e: React.DragEvent<HTMLDivElement>) => e.preventDefault()} style={{filter: "blur(10px)"}} />
                )}
                
                actual={({ imageProps }) => <img
                    {...imageProps} 
                    alt='secret pokemon' 
                    draggable="false" 
                    onDragStart={ (e: React.DragEvent<HTMLDivElement>) => e.preventDefault()}
                    style={{filter: `brightness(${reveal ? 1 : 0})`}}
                />}
                error={() => (
                    <img src={egg} alt="egg error" draggable="false" onDragStart={ (e: React.DragEvent<HTMLDivElement>) => e.preventDefault()} style={{filter: "blur(10px)"}} />
                )} />
        </div>
        );
}


export default HiddenPokemon