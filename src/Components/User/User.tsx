import React, { useRef, useState } from 'react'
import { deleteUser } from '../../fromAPI/axiosFunctions'
import { auth } from '../../firebase'
import { useAppSelector } from '../../reduxStore/hooks'
import { ScaleLoader } from 'react-spinners'
import Favorites from './Favorites'
import useOnClickOutside from '../../functions/customHooks'

const User: React.FC = () => {
    const {userData} = useAppSelector( state => state.user)
    const {usersList} = useAppSelector( state => state.leaderboard)
    const [confirm, setConfirm] = useState<boolean>(false)
    const confirmRef = useRef<HTMLDivElement>(null)
    const handleDelete = () => {
        if(userData) {
            deleteUser(userData._id)
            auth.signOut()
        }
    }

    const handleClickOutside = () => {
        setConfirm(false)
    }

    useOnClickOutside(confirmRef, handleClickOutside)

    if(!userData || !usersList) return <div className='mx-auto py-4 w-max' ><ScaleLoader height={20} width={4} radius={2} margin={2} /></div>
    else return (
        <div className='container min-h-92.5-screen mx-auto p-4' >
            <div className='container mx-auto h-max p-10 mt-10 bg-white rounded-md shadow' >
                <h1 className='mb-2' >Name: <span className='font-bold' >{userData.displayName}</span></h1>
                <h1 className='mb-2' >Best Score: <span className='font-bold'>{userData.score}</span></h1>
                <h1 className='mb-2' >Rank: <span className='font-bold'>{userData.score ? '#'+(usersList.map(user => user._id).indexOf(userData._id)+1) : 'No Rank' }</span></h1>
                <h1>Favorites: </h1>
                <Favorites />
                <div>
                    <div onClick={() => setConfirm(true)} className='mt-8 px-2 py-1 bg-red-600 rounded hover:bg-red-800 transition-colors text-white text-xs w-max cursor-pointer' >Delete Account</div>
                    {confirm && <div className="w-full h-full fixed left-0 top-0 z-100 flex flex-col items-center justify-center bg-opacity-25 bg-black">
                        <div ref={confirmRef} className='w-max h-max flex flex-col items-center rounded-md justify-center bg-white p-20'>
                            <h1 className='text-xl' >Confirm Deletion</h1>
                            <p className='text-sm'>Are you sure you want to delete this account? You will not able to revert this process.</p>
                            <div className='flex items-center mt-2' >
                                <span className='hover:text-red-800 border hover:border-red-500 m-2 p-2 rounded cursor-pointer' onClick={handleDelete} >confirm</span>
                                <span className='hover:text-red-800 border hover:border-red-500 m-2 p-2 rounded cursor-pointer' onClick={() => setConfirm(false)} >cancel</span>
                            </div>
                        </div>

                    </div> }
                </div>
            </div>

        </div>

        );
}


export default User
