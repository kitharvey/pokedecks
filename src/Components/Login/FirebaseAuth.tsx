import React from 'react'
import { StyledFirebaseAuth } from 'react-firebaseui';
import { auth } from "../../firebase"
import firebase from "firebase"
import { useAppSelector } from '../../reduxStore/hooks';
import { Redirect } from 'react-router-dom'
import logo from "../../assets/colored-logo.png"
import { motion } from 'framer-motion';

const FirebaseAuth: React.FC = () => {
    const { userData } = useAppSelector( state => state.user )
    const uiConfig = {
        signInFlow: "popup",
        signInSuccessURL: '/',
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.GithubAuthProvider.PROVIDER_ID,
        ],
      }

        return (
            <div className="rounded-md p-4 bg-white shadow">
                <motion.div
                      className="w-52 mx-auto my-4 cursor-pointer"
                      animate={{
                        scale: .95,
                        y: 0,
                        opacity: 1,
                        
                      }}
                      whileTap={{ 
                        rotate: 0,
                        scale: 0.95
                      }}
                      whileHover={{
                        rotate: -360,
                        scale: 1.05
                      }}
                      transition={{
                        rotate: { duration: .5 },
                      }}
                >
                  <img src={logo} draggable="false" onDragStart={ e => e.preventDefault()} className="w-auto" alt="poke-logo" />
                </motion.div>
                <StyledFirebaseAuth
                    uiConfig={uiConfig}
                    firebaseAuth={auth}
                />
                {userData && <Redirect to='/' /> } 
            </div>
        );
}


export default FirebaseAuth