import React from 'react'
import { StyledFirebaseAuth } from 'react-firebaseui';
import { auth } from "../../firebase"
import firebase from "firebase"
import { useAppSelector } from '../../redux/hooks';
import { Redirect } from 'react-router-dom'

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
                <StyledFirebaseAuth
                    uiConfig={uiConfig}
                    firebaseAuth={auth}
                />
                {userData && <Redirect to='/' /> } 
            </div>
        );
}


export default FirebaseAuth