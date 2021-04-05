import React, { useRef, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaChevronDown, FaChevronUp, FaGithub } from 'react-icons/fa'
import { PulseLoader } from 'react-spinners'
import { useAppSelector } from '../../reduxStore/hooks'
import { auth } from '../../firebase'
import useOnClickOutside from '../../functions/customHooks'

const navStyle =
  'transition-all mr-8 mt-1 text-sm border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-700'
const activenavStyle =
  'transition-all mr-8 mt-1 text-sm border-b-2 border-blue-500 border-opacity-0 border-opacity-100 text-blue-700'

const Nav: React.FC = () => {
  const { userData, status } = useAppSelector((state) => state.user)
  const [show, setShow] = useState(false)
  const navRef = useRef<HTMLButtonElement>(null)

  const handleClickOutside = () => {
    setShow(false)
  }

  useOnClickOutside(navRef, handleClickOutside)

  return (
    <nav className="w-full bg-white shadow-lg h-14">
      <div className="container py-3 px-5 flex items-center justify-between w-full m-auto">
        <div className="flex text-xl">
          <NavLink className="font-bold text-black cursor-pointer hover:text-blue-700" to="/">
            Pokédecks
          </NavLink>
          <a
            className="flex items-center ml-2 hover:text-blue-700"
            href="https://github.com/kitharvey/pokedecks"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>

        {status === 'loading' && <PulseLoader color="#1D4ED8" size={5} margin={3} />}

        {userData ? (
          <div className="flex items-center">
            <NavLink activeClassName={activenavStyle} className={navStyle} to="/explore">
              <span>Explore</span>
            </NavLink>
            <NavLink activeClassName={activenavStyle} className={navStyle} to="/play">
              <span>Play</span>
            </NavLink>
            <NavLink activeClassName={activenavStyle} className={navStyle} to="/leaderboard">
              <span>Leaderboard</span>
            </NavLink>
            <button
              type="button"
              ref={navRef}
              className={`relative cursor-pointer select-none flex items-center px-3 py-1 rounded-full border hover:shadow-md hover:bg-gray-100 ${
                show && 'bg-gray-100 shadow-md'
              }`}
              onClick={() => setShow(!show)}
            >
              <p className="text-sm">{userData.displayName.split(' ')[0]}</p>
              <p className="ml-2 text-xs">{show ? <FaChevronUp /> : <FaChevronDown />}</p>
              {show && (
                <div className="bg-white text-xs font-light shadow-lg rounded z-10 absolute -bottom-4 right-0 transform translate-y-full overflow-hidden">
                  <Link
                    className="hover:bg-gray-100 cursor-pointer px-2 py-1"
                    to={`/user/${userData.uid}`}
                  >
                    <span>account</span>
                  </Link>
                  <Link
                    className="hover:bg-gray-100 cursor-pointer px-2 py-1"
                    onClick={() => auth.signOut()}
                    to="/signin"
                  >
                    <span>log out</span>
                  </Link>
                </div>
              )}
            </button>
          </div>
        ) : (
          <NavLink activeClassName={activenavStyle} className={navStyle} to="/signin">
            <span>Sign In</span>
          </NavLink>
        )}
      </div>
    </nav>
  )
}

export default Nav
