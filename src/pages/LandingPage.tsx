import React from 'react'
import { useHistory } from 'react-router-dom'
const LandingPage: React.FC = () => {
    const history = useHistory()
        return (
            <div className='flex h-full w-full' > 
                    <div onClick={() => history.push('/browse')} className='cursor-pointer hover:opacity-50 w-1/2 h-full flex items-center justify-center' >
                        <h1 className='font-bold text-4xl' >Browse</h1>
                    </div>
                    <div onClick={() => history.push('/game')} className='cursor-pointer hover:opacity-50 w-1/2 h-full flex items-center justify-center' >
                        <h1 className='font-bold text-4xl' >Play</h1>
                    </div>
            </div>
        );
}


export default LandingPage