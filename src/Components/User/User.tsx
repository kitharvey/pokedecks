import React from 'react'
import { deleteUser } from '../../fetch/FetchData'
import { auth } from '../../firebase'
import { useAppSelector } from '../../reduxStore/hooks'
import Card from '../Deck/Card'

const User: React.FC = () => {
    const {userData} = useAppSelector( state => state.user)
    const {usersList} = useAppSelector( state => state.leaderboard)
    const handleDelete = () => {
        if(userData) {
            deleteUser({uid: userData.uid, displayName: userData.displayName})
            auth.signOut()
        }
    }

    if(!userData || !usersList) return <h1>Loading</h1>
    else return (
        <div className='w-full h-full' >
            <div className='container mx-auto h-max p-4 mt-10 bg-white rounded-md shadow' >
                <h1>Name: <span className='font-bold' >{userData.displayName}</span></h1>
                <h1>Best Score: <span className='font-bold'>{userData.score}</span></h1>
                <h1>Rank: <span className='font-bold'>{userData.score ? '#'+usersList.map(user => user._id).indexOf(userData._id)+1 : 'No Rank' }</span></h1>
                <h1>Favorites: </h1>
                <div className='flex flex-wrap justify-center mt-4' >
                    {userData.favorites.length > 0 
                        ? userData.favorites.map( fav => <div key={fav} className='h-96 w-80 m-4 rounded-md shadow' > <Card id={fav} /></div> )
                        : <h1>No Favorites</h1>
                    }
                </div>
                <div onClick={handleDelete} className='mt-8 px-2 py-1 bg-black rounded hover:bg-gray-700 transition-colors text-white text-xs w-max cursor-pointer' >Delete Account</div>
            </div>

        </div>

        );
}


export default User
