import React, { useEffect, useState } from 'react'
import { UserFavoritesProps } from '../../InterfacesProps/Interfaces'
import { useAppSelector } from '../../reduxStore/hooks'
import ActualCard from '../Deck/ActualCard'

interface FavoritesProps {

}

const Favorites: React.FC<FavoritesProps> = ({}) => {
    const {userData} = useAppSelector( state => state.user)
    const [favoritesList, setFavoritesList] = useState<UserFavoritesProps[] | null>(null)
    const [search, setSearch] = useState<string>('')

    useEffect(() => {
        if(userData) setFavoritesList(userData.favorites)
        return () => {
            setFavoritesList(null)
        }
    }, [userData])

        return (
            <div className='w-full' >
                <div>
                    sort by name asc desc, by id asc desc
                    filter by type
                    search
                </div>
                <div className='flex flex-wrap justify-center mt-4' >
                    {favoritesList && favoritesList.length > 0 
                        ? favoritesList.map( fav => <div key={fav.id} className='h-96 w-80 m-4 rounded-md shadow' > <ActualCard id={fav.id} name={fav.name} types={fav.types} /></div> )
                        : <h1>No Favorites</h1>
                    }
                </div>
            </div>
        )
}


export default Favorites