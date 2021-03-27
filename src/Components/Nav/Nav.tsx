import React, { useState } from 'react'
import { auth } from '../../firebase';
import { useHistory, NavLink } from 'react-router-dom'
import {FaChevronDown, FaChevronUp} from 'react-icons/fa'
import { useAppSelector } from '../../reduxStore/hooks';
import { PulseLoader } from 'react-spinners';

const navStyle = 'transition-all mr-8 mt-1 text-sm border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-700'
const activenavStyle = 'transition-all mr-8 mt-1 text-sm border-b-2 border-blue-500 border-opacity-0 border-opacity-100 text-blue-700'

const Nav: React.FC = () => {
    const {userData, status} = useAppSelector(state => state.user)
    const [show, setShow] = useState(false)

    let history = useHistory()

    const handleLogOut = () => {
        auth.signOut()
        history.push('/')
  }

        return (
            <nav className="w-full bg-white shadow-lg h-14">
                <div className="container py-3 px-5 flex items-center justify-between w-full m-auto">
                    <h1 className="text-xl font-bold text-black cursor-pointer" onClick={() => history.push('/')} >Pokédecks</h1>
                    {status === 'loading' ? <PulseLoader color='#1D4ED8' size={5} margin={3} />
                    : 
                    userData ?
                                <div className="flex items-center">
                                    <NavLink activeClassName={activenavStyle} className={navStyle} to='/explore' >
                                        <span>Browse</span>
                                    </NavLink>
                                    <NavLink activeClassName={activenavStyle} className={navStyle} to='/play' >
                                        <span>Play</span>
                                    </NavLink>
                                    <NavLink activeClassName={activenavStyle} className={navStyle} to='/leaderboard' >
                                        <span>Leaderboard</span>
                                    </NavLink>
                                    <div 
                                        className={`relative cursor-pointer select-none flex items-center px-3 py-1 rounded-full border hover:shadow-md hover:bg-gray-100 ${show && 'bg-gray-100 shadow-md'}`} onClick={() => setShow(!show)} 
                                    >
                                        <p className='text-sm' >{userData.displayName.split(' ')[0]}</p>
                                        {show ? <FaChevronUp className='ml-2 text-xs'/> : <FaChevronDown className='ml-2 text-xs'/>}
                                        {show && 
                                        <div 
                                            className='bg-white text-xs font-light shadow-lg rounded z-10 absolute -bottom-4 right-0 transform translate-y-full overflow-hidden'
                                        >
                                            <div className='hover:bg-gray-100 cursor-pointer px-2 py-1' onClick={() => history.push(`/user/${userData.uid}`)} >
                                                <span>account</span>
                                            </div>
                                            <div className='hover:bg-gray-100 cursor-pointer px-2 py-1' onClick={handleLogOut}  >
                                                <span>log out</span>
                                            </div>
                                        </div>
                                        }
                                    </div>
                                </div>


                    :   <NavLink activeClassName={activenavStyle} className={navStyle} to='/signin' >
                            <span>Sign In</span>
                        </NavLink>}
                        
                    
                </div>
               
            </nav>
        );
}


export default Nav