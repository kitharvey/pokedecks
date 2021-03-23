import React, { useEffect } from 'react'
import { StyledFirebaseAuth } from 'react-firebaseui';
import { auth } from "../../firebase"
import firebase from "firebase"
interface FirebaseAuthProps {

}

const FirebaseAuth: React.FC<FirebaseAuthProps> = ({}) => {

    const uiConfig = {
        signInFlow: "popup",
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.GithubAuthProvider.PROVIDER_ID,
        ],
      }

        return (
            <div className="h-96 w-80 rounded-md p-4 bg-white shadow">
                
                <StyledFirebaseAuth
                    uiConfig={uiConfig}
                    firebaseAuth={auth}
                />
            </div>
        );
}


export default FirebaseAuth