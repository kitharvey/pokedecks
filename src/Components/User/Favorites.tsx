import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useAppDispatch, useAppSelector } from '../../reduxStore/hooks'
import ActualCard from '../Deck/ActualCard'
import {getFavoritesList, getTypeList} from '../../reduxStore/favoritesSlice'

const Favorites: React.FC = () => {
    const {userData} = useAppSelector( state => state.user)
    const {typeList, FavoritesList} = useAppSelector( state => state.favorites)
    const [filterType, setFilterType] = useState('')
    const [sortType, setSortType] = useState<'name' | 'id'>('name')
    const [search, setSearch] = useState('')
    const dispatch = useAppDispatch()
    useEffect(() => {
        if(userData) {
            let tempList = userData.favorites.slice()
            dispatch(getTypeList(tempList))
            let filteredList = tempList.filter( pokemon => pokemon.name.includes(search) && pokemon.types.join('').includes(filterType) )
            filteredList.sort((a, b) => {
                if (a[sortType] < b[sortType]) {
                  return -1
                }
                if (a[sortType] > b[sortType]) {
                  return 1
                }
                return 0;
              });
            dispatch(getFavoritesList(filteredList))
        } 
    }, [userData, dispatch, filterType, sortType, search])

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const key = e.target.value.toLowerCase()
        setSearch(key)
    }

    const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const key = e.target.value
        if(key === 'name') setSortType('name')
        else setSortType('id')
    }

    const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const key = e.target.value
        setFilterType(key)
    }

        return (
            <div className='w-full mt-4' >
                <div className='text-xs flex' >
                    <select 
                    onChange={handleSort} 
                    className='cursor-pointer select-none p-1 mr-3 rounded outline-none border text-gray-400 focus-within:text-black hover:text-black' >
                        <option value="name">Sort by Name</option>
                        <option value="id">Sort by ID</option>
                    </select>
                    <select 
                    onChange={handleFilter} 
                    className='cursor-pointer select-none p-1 mr-3 rounded outline-none border text-gray-400 focus-within:text-black hover:text-black' >
                        <option value="">Filter by type</option>
                        {typeList && typeList.map( type => <option key={type} value={type}>{type}</option> )}
                    </select>
                    <div className="relative text-gray-400 focus-within:text-black hover:text-black">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <FaSearch/>
                        </span>
                        <input id="searchpokemon" type="search" name="q" value={search} className="py-2 text-sm pl-10 outline-none rounded border text-gray-900 w-full" placeholder="Enter Pokemon Name..." autoComplete="off" onChange={handleSearch} />
                    </div>
                </div>
                <div className='flex flex-wrap justify-center mt-2' >
                    {FavoritesList
                        ? FavoritesList.map( fav => <div key={fav.id} className='h-96 w-80 m-2 rounded-md shadow' > <ActualCard id={fav.id} name={fav.name} types={fav.types} /></div> )
                        : <h1>No Favorites</h1>
                    }
                </div>
            </div>
        )
}


export default Favorites