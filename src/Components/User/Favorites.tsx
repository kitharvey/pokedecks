import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useAppDispatch, useAppSelector } from '../../reduxStore/hooks'
import ActualCard from '../Deck/ActualCard'
import {filterFavoritesByType, sortFavorites, getFavoritesList} from '../../reduxStore/favoritesSlice'

const Favorites: React.FC = () => {
    const {userData} = useAppSelector( state => state.user)
    const {typeList, filteredList} = useAppSelector( state => state.favorites)
    const [search, setSearch] = useState<string>('')
    const dispatch = useAppDispatch()
    useEffect(() => {
        if(userData) {
            let tempList = userData.favorites.slice()
            dispatch(getFavoritesList(tempList))
        } 
    }, [userData, dispatch])

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value.toLowerCase())
    }

    const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const key = e.target.value
        dispatch(sortFavorites(key))
    }

    const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const key = e.target.value
        if(userData) {
            dispatch(filterFavoritesByType(key))
        }
    }

        return (
            <div className='w-full' >
                <div className='text-sm' >
                    <select onChange={handleSort} >
                        <option value="">Sort by</option>
                        <option value="name">name</option>
                        <option value="id">id</option>
                    </select>
                    <select onChange={handleFilter} >
                        <option value="">Filter by type</option>
                        {typeList && typeList.map( type => <option key={type} value={type}>{type}</option> )}
                    </select>
                    <div className="relative text-gray-400 focus-within:text-black">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <FaSearch/>
                        </span>
                        <input id="searchpokemon" type="search" name="q" value={search} className="py-2 text-sm pl-10 focus:outline-none text-gray-900 w-full" placeholder="Enter Pokemon Name..." autoComplete="off" onChange={handleSearch} />
                    </div>
                </div>
                <div className='flex flex-wrap justify-center mt-4' >
                    {filteredList
                        ? filteredList.map( fav => <div key={fav.id} className='h-96 w-80 m-4 rounded-md shadow' > <ActualCard id={fav.id} name={fav.name} types={fav.types} /></div> )
                        : <h1>No Favorites</h1>
                    }
                </div>
            </div>
        )
}


export default Favorites