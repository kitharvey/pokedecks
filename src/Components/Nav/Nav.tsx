import React, { useState } from 'react'
import { auth } from '../../firebase';
import { useHistory } from 'react-router-dom'
import {FaChevronDown} from 'react-icons/fa'
import { useAppSelector } from '../../redux/hooks';
const Nav: React.FC = () => {
    const {userData} = useAppSelector(state => state.user)
    const [show, setShow] = useState(false)

    let history = useHistory()

    const handleLogOut = () => {
        auth.signOut()
        history.push('/')
  }

        return (
            <nav className="w-full h-7.5-screen bg-white shadow-lg">
                <div className="container py-3 px-5 flex items-center justify-between w-full mx-auto">
                    <h1 className="text-4xl font-bold text-black cursor-pointer" onClick={() => history.push('/')} >Pokédecks</h1>
                    {userData ?
                                    <div className='flex items-center relative cursor-pointer select-none' onClick={() => setShow(!show)} >
                                        <p  className='mr-2 text-lg' >{userData.displayName}</p>
                                        <FaChevronDown className='text-xs'/>
                                        {show && 
                                        <div 
                                            className='bg-white text-sm shadow-lg rounded z-10 absolute bottom-0 right-0 transform translate-y-full overflow-hidden'
                                        >
                                            <div className='hover:bg-gray-100 cursor-pointer px-2 py-1' onClick={() => history.push(`/user/${userData.uid}`)} >account</div>
                                            <div className='hover:bg-gray-100 cursor-pointer px-2 py-1' onClick={handleLogOut}  >log out</div>
                                        </div>
                                        }
                                    </div>

                    : <div onClick={() => history.push('/signin')} >Sign In</div>}
                    
                </div>
               
            </nav>
        );
}


export default Nav