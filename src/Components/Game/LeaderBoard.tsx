import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../reduxStore/hooks'
import { fetchusersList } from '../../reduxStore/leaderboardSlice'
import { ScaleLoader } from 'react-spinners';

const LeaderBoard: React.FC = () => {
    const {usersList} = useAppSelector( state => state.leaderboard)
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        dispatch(fetchusersList())
    }, [dispatch])

        return (
            <div className="container min-h-9/10-screen mx-auto">
                <h1 className='m-4 font-bold text-xl' >Leader Board</h1>
                <div className='w-full bg-white rounded-md shadow'>
                    <div className='w-full grid grid-cols-3'>
                        <p className='p-2 text-center font-bold' >Rank</p>
                        <p className='p-2 text-center font-bold' >Name</p>
                        <p className='p-2 text-center font-bold' >Score</p>
                    </div>
                    {usersList ? usersList.filter( user => user.score > 0 ).map( (user, index) => (
                        <div className='w-full grid grid-cols-3 border-t' key={index}>
                            <p className='p-2 text-sm text-center' >{index+1}</p>
                            <p className='p-2 text-sm text-center' >{user.displayName}</p>
                            <p className='p-2 text-sm text-center' >{user.score}</p>
                        </div>
                    ) ) 
                    : <ScaleLoader height={20} width={4} radius={2} margin={2} />
                    }
                </div>
            </div>
        );
}


export default LeaderBoard