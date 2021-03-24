import React from 'react'
import { RiCloseCircleFill } from 'react-icons/ri';
import {Link} from 'react-router-dom'
import { useAppSelector } from '../../redux/hooks';


const GameOver: React.FC<{score: number}> = ({score}) => {
    const {userData} = useAppSelector( state => state.user )
        return (
            <div className="w-full h-full absolute z-100 flex flex-col items-center rounded-md justify-center bg-white p-4 shadow">
                <div className="h-8 w-8 absolute top-6 right-7 cursor-pointer transition duration-100 ease-in-out hover:opacity-50 text-4xl font-black">
                    <Link to='/' ><RiCloseCircleFill /></Link> 
                </div>
                <p className='text-2xl font-bold' >Game Over</p>
                <p className='text-2xl' >Your Score: <span className='font-bold' >{score}</span></p>
                <p className='text-2xl'>Your Best Score: <span className='font-bold' >{userData?.score}</span></p>
                <Link to='/leaderboard' ><p className='mt-4' >View Leaderboard</p></Link>
            </div>
        );
}


export default GameOver