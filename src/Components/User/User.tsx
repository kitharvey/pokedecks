import React from 'react'
import { useAppSelector } from '../../redux/hooks'
interface UserProps {


}

const User: React.FC<UserProps> = ({}) => {
    const {userData} = useAppSelector( state => state.user)
    if(!userData) return <h1>Loading</h1>
    else return (
        <div>
            <h1>{userData.displayName}</h1>
            <h1>heelo</h1>
        </div>
        );
}


export default User