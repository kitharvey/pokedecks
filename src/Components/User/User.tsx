import React from 'react'
import { useAppSelector } from '../../redux/hooks'
import Card from '../Deck/Card'

const User: React.FC = () => {
    const {userData} = useAppSelector( state => state.user)
    if(!userData) return <h1>Loading</h1>
    else return (
        <div className='container mx-auto h-full' >
            <div className='flex flex-wrap justify-center mt-10' >
                {userData.favorites.map( fav => <div key={fav} className='h-96 w-80 m-4 rounded-md shadow' > <Card id={fav} /></div> )}
            </div>
        </div>
        );
}


export default User
