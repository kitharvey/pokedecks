import React from 'react'
import { deleteUser } from '../../fromAPI/axiosFunctions'
import { auth } from '../../firebase'
import { useAppSelector } from '../../reduxStore/hooks'
import { ScaleLoader } from 'react-spinners'
import Favorites from './Favorites'

const User: React.FC = () => {
    const {userData} = useAppSelector( state => state.user)
    const {usersList} = useAppSelector( state => state.leaderboard)


    const handleDelete = () => {
        if(userData) {
            deleteUser(userData._id)
            auth.signOut()
        }
    }

    if(!userData || !usersList) return <div className='mx-auto py-4 w-max' ><ScaleLoader height={20} width={4} radius={2} margin={2} /></div>
    else return (
        <div className='w-full min-h-92.5-screen p-4' >
            <div className='container mx-auto h-max p-4 mt-10 bg-white rounded-md shadow' >
                <h1 className='mb-2' >Name: <span className='font-bold' >{userData.displayName}</span></h1>
                <h1 className='mb-2' >Best Score: <span className='font-bold'>{userData.score}</span></h1>
                <h1 className='mb-2' >Rank: <span className='font-bold'>{userData.score ? '#'+(usersList.map(user => user._id).indexOf(userData._id)+1) : 'No Rank' }</span></h1>
                <h1>Favorites: </h1>
                <Favorites />
                <div onClick={handleDelete} className='mt-8 px-2 py-1 bg-red-600 rounded hover:bg-red-800 transition-colors text-white text-xs w-max cursor-pointer' >Delete Account</div>
            </div>

        </div>

        );
}


export default User
