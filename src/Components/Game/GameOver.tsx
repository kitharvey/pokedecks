import React, { useEffect } from 'react'
import { RiCloseCircleFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../reduxStore/hooks'
import { updateScore } from '../../reduxStore/userSlice'

const GameOver: React.FC<{ score: number }> = ({ score }) => {
  const { userData } = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(updateScore(score))
  }, [dispatch, score])

  return (
    <div className="w-full h-full fixed left-0 top-0 z-100 flex flex-col items-center justify-center bg-opacity-25 bg-black">
      <div className="w-max h-max relative flex flex-col items-center rounded-md justify-center bg-white p-20">
        <Link
          className="h-4 w-4 absolute top-2 right-7 cursor-pointer transition duration-100 ease-in-out hover:opacity-50 text-4xl font-black"
          to="/"
        >
          <RiCloseCircleFill />
        </Link>
        <p className="text-2xl font-bold">Game Over</p>
        <p className="text-2xl">
          Your Score: <span className="font-bold">{score}</span>
        </p>
        <p className="text-2xl">
          Your Best Score: <span className="font-bold">{userData?.score}</span>
        </p>
        <Link className="mt-4 hover:text-blue-700 cursor-pointer" to="/leaderboard">
          View Leaderboard
        </Link>
      </div>
    </div>
  )
}

export default GameOver
