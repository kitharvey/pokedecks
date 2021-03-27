import React, {useEffect, useState} from 'react'
import { deleteUser } from '../../fromAPI/axiosFunctions'
import { auth } from '../../firebase'
import { useAppSelector } from '../../reduxStore/hooks'
import { ScaleLoader } from 'react-spinners'
import ActualCard from '../Deck/ActualCard'
import {UserFavoritesProps} from '../../InterfacesProps/Interfaces'

const User: React.FC = () => {
    const {userData} = useAppSelector( state => state.user)
    const {usersList} = useAppSelector( state => state.leaderboard)
    const [favoritesList, setFavoritesList] = useState<UserFavoritesProps[] | null>(null)
    const handleDelete = () => {
        if(userData) {
            deleteUser(userData._id)
            auth.signOut()
        }
    }

    useEffect(() => {
        if(userData) setFavoritesList(userData.favorites)
        return () => {
            setFavoritesList(null)
        }
    }, [userData])

    if(!userData || !usersList) return <div className='mx-auto py-4 w-max' ><ScaleLoader height={20} width={4} radius={2} margin={2} /></div>
    else return (
        <div className='w-full h-full' >
            <div className='container mx-auto h-max p-4 mt-10 bg-white rounded-md shadow' >
                <h1>Name: <span className='font-bold' >{userData.displayName}</span></h1>
                <h1>Best Score: <span className='font-bold'>{userData.score}</span></h1>
                <h1>Rank: <span className='font-bold'>{userData.score ? '#'+usersList.map(user => user._id).indexOf(userData._id)+1 : 'No Rank' }</span></h1>
                <h1>Favorites: </h1>
                {favoritesList &&
                    <div className='flex flex-wrap justify-center mt-4' >
                        {favoritesList.length > 0 
                            ? userData.favorites.map( fav => <div key={fav.id} className='h-96 w-80 m-4 rounded-md shadow' > <ActualCard id={fav.id} name={fav.name} types={fav.types} /></div> )
                            : <h1>No Favorites</h1>
                        }
                    </div>
                }

                <div onClick={handleDelete} className='mt-8 px-2 py-1 bg-black rounded hover:bg-gray-700 transition-colors text-white text-xs w-max cursor-pointer' >Delete Account</div>
            </div>

        </div>

        );
}


export default User
