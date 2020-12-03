import React, { useEffect, useState } from 'react'
import  Card  from './Card';
import { useGetPokemonList } from './useGetPokemonList';
import { Waypoint } from 'react-waypoint';
// import { GetPokemonList } from './CardInterface';

interface GetPokemonArrayInterface {
        name: string
        url: string
}

const NUMBERofCARDS = 8

var timeOutID: ReturnType<typeof setTimeout> = setTimeout(() => '', 1000)



const PokeDecks: React.FC= () => {
        const [cardNumber, setCardNumber] = useState<number>(NUMBERofCARDS)
        const result = useGetPokemonList()
        const [pokeArray, setPokeArray] = useState<GetPokemonArrayInterface[]>()
        const [waypointArray, setWaypointArray] = useState<number[]>([])
        const [searchInput, setSearchInput] = useState<string>('')
        const [isVisible, setIsVisible] = useState<boolean>(false)
        // let waypointArray: any[] = []

        useEffect(() => {
                let newData
                if(result !== undefined) {
                        newData = result.results.slice(0, cardNumber)
                        setPokeArray(newData)
                }
                return () => {
                        setPokeArray(pokeArray)
                }
                // if(newData !== undefined) setPokeArray(newData)
        }, [result, cardNumber])

        const handleOnEnter = (index: number) => {
                if(!waypointArray.includes(index)){
                        setWaypointArray([...waypointArray, index])
                        setCardNumber(cardNumber => cardNumber + NUMBERofCARDS)
                }
                
                console.log(cardNumber, waypointArray)
        }

        const handleSearch = (e: any) => {
                const key = e.key+''
                if(e.keyCode >= 65 && e.keyCode <= 90)setSearchInput(searchInput => searchInput + key.toLowerCase())
                if (e.keyCode === 8) setSearchInput(searchInput => searchInput.slice(0, -1))
                console.log(searchInput)
        }

        useEffect(() => {
                document.body.addEventListener( 'keydown', handleSearch )
        }, [])

        useEffect(() => {

                clearTimeout(timeOutID)
                setIsVisible(true)
                timeOutID = setTimeout(() => {
                        console.log("timeout")
                        setIsVisible(false)
                }, 1000)
                
                if(result) {
                        setPokeArray(result.results.filter( pokemon => pokemon.name.includes(searchInput) ))
                } 
                console.log(searchInput, pokeArray ? pokeArray.length : 0)

                return () => {
                        setPokeArray(pokeArray)
                }
        }, [searchInput])



        return (
                <div className="grid grid-cols-4 gap-4 auto-rows-max w-8/12 mx-auto my-4" >
                        {isVisible && <p className="fixed top-1/2 right-1/2 z-50 transform translate-x-1/2 -translate-y-1/2 text-9xl text-current text-shadow-md uppercase" >{searchInput}</p> }
                        {(pokeArray && !isVisible) && pokeArray.map( (pokemon, index) => (
                                        <div className="h-80 w-full" key={index}>
                                                {index  % NUMBERofCARDS === 0 && <Waypoint onEnter={() => handleOnEnter(index)}/> }
                                                <Card  link={pokemon.url} name={pokemon.name} />
                                        </div>
                                
                                ))}
                                
                </div> 
        )
}

export default PokeDecks