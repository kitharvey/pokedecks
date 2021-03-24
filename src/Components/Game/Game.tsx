import React, { useEffect, useState } from 'react'
import { NameURLInterface } from '../../InterfacesProps/Interfaces';
import {getImageSourceFromURL, getrandomIndex, shuffle} from '../../functions/GlobalFunctions'
import HiddenPokemon from './HiddenPokemon';
import {FaHeart} from 'react-icons/fa'
import GameOver from './GameOver';

interface GameProps {
    pokemonList: NameURLInterface[]
}

const arrlives = (num: number) => {
    const lives = new Array(num).fill(1)
    return lives
}

const Game: React.FC<GameProps> = ({pokemonList}) => {
    const [randomIndex, setRandom] = useState<number>(0)
    const [guessed, setGuessed] = useState<number[]>([0])
    const [options, setOptions] = useState<number[] | null>(null)
    const [score, setScore] = useState<number>(0)
    const [lives, setLives] = useState<number>(3)
    const [reveal, setReveal] = useState<boolean>(false)
    const sprite = getImageSourceFromURL(pokemonList[randomIndex].url)
    useEffect(() => {
        const tempOptions = [randomIndex]
        while(tempOptions.length < 4) tempOptions.push(getrandomIndex(pokemonList.length-1, 0))
        const shuffledOptions = shuffle(tempOptions)
        setOptions(shuffledOptions)
        return () => {
            setOptions(null)
        }
    }, [pokemonList, randomIndex])

    const handleSelect = (option: number) => {
        let newRandomIndex = randomIndex
        do {
            newRandomIndex = getrandomIndex(pokemonList.length-1, 0)
        } while (guessed.includes(newRandomIndex));
        setGuessed([...guessed, newRandomIndex])
        setReveal(true)
        setTimeout(() => {
            setRandom(newRandomIndex)
            setReveal(false)

        }, 3000)
        if(randomIndex === option) setScore(score+1)
        if(randomIndex !== option) setLives(lives-1)
    }


        return (
            <div className="w-full h-full flex items-center justify-center">
                {pokemonList && 
                <div className='flex flex-col items-center justify-center w-full' >
                    <div className='flex items-center justify-evenly w-full' >
                        <span>score: {score}</span>
                        <span className='flex text-red-500 text-lg' >{arrlives(lives).map( (_, index) => <span key={index} className='ml-1' ><FaHeart /></span> )}</span>
                    </div>
                    <HiddenPokemon sprite={sprite} reveal={reveal} />
                    <div className='flex' >
                        {options && options.map( option => (
                            <div key={option} className={'m-2'} > 
                                <button 
                                    className='p-2 cursor-pointer shadow-md transition-colors rounded-md bg-gray-100 hover:bg-gray-300' 
                                    onClick={() => handleSelect(option)} 
                                    disabled={reveal}
                                    style={{
                                        pointerEvents: reveal ? 'none' : 'all',
                                        opacity: reveal ? .5 : 1
                                    }}
                                >{pokemonList[option].name}</button>
                            </div>
                        ) 
                        )}
                    </div>
                </div>
                }
                { (lives === 0 && !reveal) && < GameOver score={score} />}
            </div>
        );
}


export default Game